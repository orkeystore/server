import moment, { unitOfTime } from 'moment';
import { FindConditions, In, IsNull, Not, Like, Repository } from 'typeorm';
import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from 'src/orm/entities/Entry';
import { KeysService } from './keys.service';
import { JWK } from 'jose';
import { IPaged, IPagerParams } from 'src/types';
import { UtilsService } from 'src/modules/utils/utils.service';
import { AppLogger } from 'src/modules/logger/logger.service';

export interface IEntryCreateParams {
  name: string;
  code: string;
  accountId: number;
  rotationPeriod?: string;
  accessToken?: string;
  description?: string;
}

@Injectable()
export class EntriesService {
  private defaultPager: IPagerParams = this.configService.get('defaultPager');

  constructor(
    private readonly logger: AppLogger,
    private readonly keysService: KeysService,
    private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    @InjectRepository(Entry) private readonly entriesRepo: Repository<Entry>,
  ) {
    logger.setContext('EntriesService');
  }

  async createEntry(
    entry: IEntryCreateParams,
    additional?: Partial<Entry>,
  ): Promise<Entry> {
    try {
      const rotateInterval = this.parseRotateInterval(entry.rotationPeriod);

      const entryData = this.entriesRepo.create({
        name: entry.name,
        code: entry.code,
        accessCode: entry.accessToken,
        description: entry.description,
        accountId: entry.accountId,
        rsakeys: [],
        rotateInterval,
        ...additional,
      });

      return await this.entriesRepo.save(entryData);
    } catch (err) {
      if (
        err.message &&
        typeof err.message === 'string' &&
        err.message.includes(
          'SQLITE_CONSTRAINT: UNIQUE constraint failed: entries.code',
        )
      ) {
        throw new BadRequestException(
          `Key entry with code "${entry.code}" already exists`,
        );
      }
      /* istanbul ignore next */
      throw err;
    }
  }

  async createEntryWithKeys(entryData: IEntryCreateParams): Promise<Entry> {
    const entry = await this.createEntry(entryData);

    entry.rsakeys = await this.keysService.checkAndGetKeysByEntry(entry);

    return entry;
  }

  async getEntry(condition: number | string): Promise<Entry> {
    if (typeof condition === 'string') {
      return await this.getEntryByCode(condition);
    }
    return await this.getEntryById(condition);
  }

  async getEntryWithUserAccessCheck(
    condition: string | number,
    user: Express.User,
  ): Promise<Entry> {
    const entry = await this.getEntry(condition);
    if (!user || entry.accountId !== user.id || entry.code === 'system') {
      throw new HttpException('Entry forbidden', HttpStatus.FORBIDDEN);
    }
    return entry;
  }

  async getEntryWithCodeAccessCheck(
    condition: string | number,
    accessCode: string,
  ): Promise<Entry> {
    const entry = await this.getEntry(condition);
    if (
      !entry.accessCode ||
      entry.accessCode !== accessCode ||
      entry.isSystem
    ) {
      throw new HttpException('Entry forbidden', HttpStatus.FORBIDDEN);
    }
    return entry;
  }

  async getEntryById(id: number): Promise<Entry> {
    const entry = await this.entriesRepo.findOne(id);

    if (!entry) {
      throw new HttpException('Entry not found', HttpStatus.NOT_FOUND);
    }

    return entry;
  }

  async getEntryByCode(code: string): Promise<Entry> {
    const entry = await this.entriesRepo.findOne({ code });

    if (!entry) {
      throw new HttpException('Entry not found', HttpStatus.NOT_FOUND);
    }

    return entry;
  }

  async getEntriesByIds(accountId: number, ids: number[]): Promise<Entry[]> {
    return await this.entriesRepo.find({
      where: { accountId, id: In(ids) },
    });
  }

  async getEntriesList(
    accountId: number,
    pagination?: IPagerParams,
    search?: string,
    isArchived?: boolean,
  ): Promise<IPaged<Entry>> {
    const where: FindConditions<Entry> = {
      accountId,
      isSystem: false,
      archivedAt: isArchived ? Not(IsNull()) : IsNull(),
    };

    if (search !== undefined) {
      where.name = Like(`%${search}%`);
    }

    const count = await this.entriesRepo.count({ where });
    const pager = this.utilsService.getOrmPagination(count, pagination);

    const result = await this.entriesRepo.find({
      where,
      skip: pager.skip,
      take: pager.take,
    });

    const totals = this.utilsService.getPaginationTotal(count, pager.take);

    return {
      items: result,
      pager: { page: pager.page, perPage: pager.take, ...totals },
    };
  }

  async getSystemEntry(): Promise<Entry> {
    const entry: Entry = await this.entriesRepo.findOne({
      where: { isSystem: true },
    });

    if (entry === undefined) {
      return await this.createSystemEntry();
    }

    return entry;
  }

  async createSystemEntry(): Promise<Entry> {
    const systemKeyRotationPeriod = this.configService.get<string>(
      'systemKeyRotationPeriod',
    );

    return await this.createEntry(
      {
        name: 'System key entry',
        code: 'system',
        accountId: 1,
        rotationPeriod: systemKeyRotationPeriod.replace(/\_/g, ' '),
      },
      { isSystem: true },
    );
  }

  async getSystemEntryWithKey(): Promise<{
    key: JWK.RSAKey;
    entry: Entry;
    expires: number;
  }> {
    const entry = await this.getSystemEntry();

    const { key, expUnix } = await this.keysService.getCurrentActiveKeyForEntry(
      entry,
    );

    return { entry, key, expires: expUnix };
  }

  async deleteEntryById(id: number, user?: Express.User): Promise<Entry> {
    const entry = user
      ? await this.getEntryWithUserAccessCheck(id, user)
      : await this.getEntry(id);

    if (entry.code === 'system') {
      throw new HttpException(
        `Can't delete system key`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const removedItem = await this.entriesRepo.remove(entry);

    removedItem.id = id;

    return removedItem;
  }

  async archiveEntryById(id: number, user?: Express.User): Promise<Entry> {
    const entry = user
      ? await this.getEntryWithUserAccessCheck(id, user)
      : await this.getEntry(id);

    entry.archivedAt = moment().unix();

    return await this.entriesRepo.save(entry);
  }

  async restoreEntryById(id: number, user?: Express.User): Promise<Entry> {
    const entry = user
      ? await this.getEntryWithUserAccessCheck(id, user)
      : await this.getEntry(id);

    entry.archivedAt = null;
    return await this.entriesRepo.save(entry);
  }

  async generateEntriesFromEnv(): Promise<void> {
    const targets = this.parseKeys(process.env.GENERATE_KEYS);
    await Promise.all(
      targets.map(async (target) => {
        try {
          await this.createEntryWithKeys(target);
          return true;
        } catch (err) {
          return false;
        }
      }),
    );
  }

  parseRotateInterval(intervalString?: string): number | null {
    if (!intervalString) {
      return null;
    }

    const [num, unit] = intervalString.split(' ');
    const duration = [parseFloat(num), unit as unitOfTime.DurationConstructor];

    return moment.duration(...duration).asSeconds();
  }

  parseKeys(targets: string): IEntryCreateParams[] {
    if (targets === undefined) {
      return [];
    }

    try {
      return targets.split(',').map((item) => {
        const [name, rotation, accessCode] = item.split(':');

        const conf: IEntryCreateParams = {
          name,
          code: name,
          accessToken: accessCode,
          accountId: 1,
          rotationPeriod: rotation.replace('_', ' '),
        };

        return conf;
      });
    } catch (err) {
      throw new Error('Wrong format recieved from env variable GENERATE_KEYS');
    }
  }
}
