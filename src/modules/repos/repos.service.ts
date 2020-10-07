import { Repository, In, FindManyOptions, FindConditions, Like } from 'typeorm';
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Entry } from 'src/orm/entities/Entry';
import { Repo } from 'src/orm/entities/Repo';
import { IPaged, IPagerParams } from 'src/types';
import { UtilsService } from '../utils/utils.service';
import { DTOReposCreateRequest } from './dto/DTOReposCreateRequest';
import { IAllKeyFormats, KeysService } from '../keys/services/keys.service';
import { AppLogger } from '../logger/logger.service';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class ReposService {
  constructor(
    private readonly logger: AppLogger,
    private readonly utilsService: UtilsService,
    private readonly keysService: KeysService,
    @InjectRepository(Entry) private readonly entriesRepo: Repository<Entry>,
    @InjectRepository(Repo) private readonly reposRepo: Repository<Repo>,
  ) {
    logger.setContext('ReposService');
  }

  async createRepo(data: DTOReposCreateRequest, userId: number): Promise<Repo> {
    try {
      const entries = await this.entriesRepo.find({
        where: { code: In(data.keys), accountId: userId },
      });

      if (entries.length !== data.keys.length) {
        throw new NotFoundException('Entries not found');
      }

      const repo = this.reposRepo.create({
        accountId: userId,
        code: data.code,
        entries,
        name: data.name,
        accessToken: data.accessToken,
        description: data.description,
      });

      return await this.reposRepo.save(repo);
    } catch (err) {
      if (err.message && typeof err.message === 'string') {
        if (
          err.message.includes(
            'SQLITE_CONSTRAINT: UNIQUE constraint failed: repos.code',
          )
        ) {
          throw new BadRequestException(
            `Repo with code "${data.code}" already exists`,
          );
        }
      }
      throw err;
    }
  }

  async getRepos(
    userId: number,
    pagination?: IPagerParams,
    search?: string,
  ): Promise<IPaged<Repo>> {
    const where: FindConditions<Repo> = { accountId: userId };

    if (search !== undefined) {
      where.name = Like(`%${search}%`);
    }

    const findConditions: FindManyOptions<Repo> = {
      where,
      relations: ['entries'],
    };
    const count = await this.reposRepo.count({ where });

    const { skip, take, ...pager } = this.utilsService.getOrmPagination(
      count,
      pagination,
    );

    const result = await this.reposRepo.find({
      ...findConditions,
      skip,
      take,
    });

    return { items: result, pager };
  }

  async removeRepos(targetIds: number[], userId: number): Promise<number[]> {
    const repos = await this.reposRepo.find({
      where: { accountId: userId, id: In(targetIds) },
    });

    if (repos.length !== targetIds.length) {
      throw new NotFoundException('Repos not found');
    }

    await this.reposRepo.remove(repos);

    return targetIds;
  }

  async getRepoBunch(
    code: string,
    accessToken?: string,
  ): Promise<{ entries: Required<IAllKeyFormats>[] }> {
    const repo = await this.reposRepo.findOne({
      where: { code },
      relations: ['entries'],
    });

    if (repo === undefined) {
      throw new HttpException('Repository not found', HttpStatus.NOT_FOUND);
    }

    if (accessToken !== undefined && repo.accessToken !== accessToken) {
      throw new HttpException('Invalid access token', HttpStatus.FORBIDDEN);
    }

    const entries = await Promise.all(
      repo.entries.map(async (entry) => {
        const [targetKey] = await this.keysService.checkAndGetKeysByEntry(
          entry,
        );
        const result = await this.keysService.getAllFormats(targetKey, true);
        return {
          ...(result as Required<IAllKeyFormats>),
          accessToken: entry.accessCode,
        };
      }),
    );

    return { entries };
  }

  async generateReposFromEnvironment(): Promise<void> {
    const repos = this.parseRepos();

    await Promise.all(
      repos.map(async (repo) => {
        try {
          await this.createRepo(repo, 1);
        } catch (err) {
          if (
            err.message &&
            typeof err.message === 'string' &&
            err.message.includes('already exists')
          ) {
            return;
          }
          throw err;
        }
      }),
    ).catch((err) => {
      console.error(
        `Error while creating repos from env variable GENERATE_REPOS:`,
        process.env.GENERATE_REPOS,
      );
      console.error(err.message);
    });
  }

  parseRepos(
    targets: string | undefined = process.env.GENERATE_REPOS,
  ): DTOReposCreateRequest[] {
    // targets example: `repo1:repoToken:key1,key2,key3;repo2:repoToken2:key1,key2,key3`
    if (targets === undefined) {
      return [];
    }

    try {
      return targets.split(';').map((item) => {
        const [code, token, keys] = item.split(':');

        const conf: DTOReposCreateRequest = {
          name: code,
          code,
          accessToken: token,
          keys: keys.split(','),
          description: `Auto-generated key. Based on environment data`,
        };

        return conf;
      });
    } catch (err) {
      throw new Error('Wrong format recieved from env variable GENERATE_REPOS');
    }
  }
}

export const reposServiceProvider = {
  provide: ReposService,
  useFactory: async (
    logger: AppLogger,
    utilsService: UtilsService,
    keysService: KeysService,
    entriesRepo: Repository<Entry>,
    reposRepo: Repository<Repo>,
    _authService: AuthService, // initialization is required
  ): Promise<ReposService> => {
    const service = new ReposService(
      logger,
      utilsService,
      keysService,
      entriesRepo,
      reposRepo,
    );

    await service.generateReposFromEnvironment();

    return service;
  },
  inject: [
    AppLogger,
    UtilsService,
    KeysService,
    getRepositoryToken(Entry),
    getRepositoryToken(Repo),
    AuthService,
  ],
};
