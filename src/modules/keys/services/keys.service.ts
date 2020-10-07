import { Raw, SelectQueryBuilder } from 'typeorm';
import { JSONWebKey, JWK, JWKRSAKey } from 'jose';
import moment from 'moment';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RSAKey } from 'src/orm/entities/RSAKey';
import { Entry } from 'src/orm/entities/Entry';
import { IPaged, IPagerParams } from 'src/types';
import { IStorageFilter, KeysRepo } from 'src/orm/repos/KeysRepo';
import { ConfigService } from '@nestjs/config';

export interface IEntryCreateParams {
  name: string;
  code: string;
  accessCode?: string;
  description?: string;
  account: number;
  rotationPeriod?: string;
}

export interface IParsedKey {
  key: JWK.RSAKey;
  expires: string;
  expUnix: number;
  activateUnix: number;
  entry?: Entry;
}

export interface IAllKeyFormats {
  publicKey: { jwk: JSONWebKey; pem: string };
  privateKey?: { jwk: JSONWebKey; pem: string };
  activatesAt: number;
  expiresAt: number;
  entryId: number;
  accessToken?: string;
}

export const PREPARED_KEYS_QTTY = 3;

@Injectable()
export class KeysService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(KeysRepo) private readonly rsaKeysRepo: KeysRepo,
  ) {}

  async checkAndGetKeysByEntry(entry: Entry): Promise<RSAKey[]> {
    let keys = await this.getActiveKeysSetByEntry(entry);

    if (entry.rotateInterval) {
      if (keys.length === 0) {
        keys = await this.createRotatableSet(entry);
      }
      if (keys.length !== 0 && keys.length < PREPARED_KEYS_QTTY) {
        keys = await this.refillRotatableSet(entry, keys);
      }
    } else if (keys.length === 0) {
      keys = [await this.createKey(entry)];
    }

    return keys;
  }

  async createKey(
    entry: Entry,
    startUnixMoment: number = moment().unix(),
    expireUnixMoment: number = null,
  ): Promise<RSAKey> {
    const alg = 'RS256';
    const newKey = await JWK.generate('RSA', 2048, { alg }, true);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { kid, ...jwk } = newKey.toJWK(true);

    const dbEntry = this.rsaKeysRepo.create({
      ...jwk,
      entry,
      activatesAt: startUnixMoment,
      expiresAt: expireUnixMoment,
    });

    return await this.rsaKeysRepo.save(dbEntry);
  }

  async removeKey(id: number): Promise<{ deletedIds: number[] }> {
    const key = await this.rsaKeysRepo.findOne(id);

    if (key === undefined) {
      throw new HttpException('Key not found', HttpStatus.NOT_FOUND);
    }

    await this.rsaKeysRepo.remove(key);

    return { deletedIds: [id] };
  }

  async createRotatableSet(entry: Entry): Promise<RSAKey[]> {
    const startMoment = moment().unix();
    const rotateInterval = entry.rotateInterval;

    const sequence = [
      this.createKey(entry, startMoment, startMoment + rotateInterval),
    ];

    while (sequence.length < PREPARED_KEYS_QTTY) {
      sequence.push(
        this.createKey(
          entry,
          startMoment + rotateInterval * sequence.length,
          startMoment + rotateInterval * (sequence.length + 1),
        ),
      );
    }

    return await Promise.all(sequence);
  }

  async getActiveKeysSetByEntry(entry: Entry): Promise<RSAKey[]> {
    const now = moment().unix();

    const keys = await this.rsaKeysRepo.find({
      where: {
        expiresAt: Raw((alias) => `(${alias} IS NULL OR ${alias} >= ${now})`),
        entry: entry.id,
      },
      order: { activatesAt: 'ASC' },
    });

    return keys;
  }

  async refillRotatableSet(
    entry: Entry,
    existedKeys: RSAKey[] = [],
  ): Promise<RSAKey[]> {
    let required = PREPARED_KEYS_QTTY - existedKeys.length;
    const startMoment = existedKeys
      .map((item) => item.expiresAt)
      .sort((a, b) => {
        /* istanbul ignore next */
        return b - a;
      })[0];

    const sequence = [];

    while (required > 0) {
      sequence.push(
        this.createKey(
          entry,
          1 + startMoment + entry.rotateInterval * required - 1,
          startMoment + entry.rotateInterval * required,
        ),
      );
      required--;
    }

    const newKeys = await Promise.all<RSAKey>(sequence);
    return existedKeys.concat(
      /* istanbul ignore next */
      newKeys.sort((a, b) => a.expiresAt - b.expiresAt),
    );
  }

  async getAllFormats(
    key: RSAKey,
    isPrivate?: boolean,
  ): Promise<IAllKeyFormats> {
    const formatted = this.transformKeyToResponseFormat(key);
    const privateKey = isPrivate
      ? {
          jwk: formatted.key.toJWK(isPrivate),
          pem: formatted.key.toPEM(isPrivate),
        }
      : undefined;

    return {
      publicKey: {
        jwk: formatted.key.toJWK(),
        pem: formatted.key.toPEM(),
      },
      privateKey,
      activatesAt: key.activatesAt,
      expiresAt: key.expiresAt,
      entryId: key.entryId,
    };
  }

  async getCurrentActiveKeyForEntry(
    entry: Entry,
  ): Promise<{ key: JWK.RSAKey; expires: string | null; expUnix: number }> {
    const [targetKey] = await this.checkAndGetKeysByEntry(entry);
    return this.transformKeyToResponseFormat(targetKey);
  }

  async getKeysList(
    pagination?: IPagerParams,
    filter?: IStorageFilter,
  ): Promise<IPaged<IParsedKey>> {
    const defaultPager = this.configService.get<IPagerParams>('defaultPager');

    const [keys, pager] = await this.rsaKeysRepo.getStorage(
      pagination || defaultPager,
      filter,
    );

    return {
      items: keys.map(this.transformKeyToResponseFormat),
      pager,
    };
  }

  async getKeyById(
    keyId: number,
    opts: { userIdForCheck?: number } = {},
  ): Promise<RSAKey> {
    const { userIdForCheck } = opts;
    const [key] = await this.rsaKeysRepo.find({
      where: (qb: SelectQueryBuilder<RSAKey>) => {
        qb.where('RSAKey_kid = :keyId', {
          keyId,
        }).andWhere('RSAKey__entry_code != "system"');
      },
      relations: ['entry'],
    });

    if (key === undefined) {
      throw new HttpException('Key not found', HttpStatus.NOT_FOUND);
    }

    if (
      userIdForCheck !== undefined &&
      key.entry.accountId !== userIdForCheck
    ) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }

    return key;
  }

  transformKeyToResponseFormat(targetKey: RSAKey): IParsedKey {
    const parsedKey: JWKRSAKey = {
      ...targetKey,
      kty: targetKey.kty as 'RSA',
      kid: targetKey.kid.toString(),
    };

    const expires =
      targetKey.expiresAt === null
        ? null
        : moment
            .unix(targetKey.expiresAt)
            .utc()
            .format('ddd, DD MMM YYYY hh:mm:ss [GMT]');

    return {
      key: JWK.asKey(parsedKey),
      expires,
      expUnix: targetKey.expiresAt,
      activateUnix: targetKey.activatesAt,
      entry: targetKey.entry,
    };
  }
}
