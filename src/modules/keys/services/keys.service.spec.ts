import { Test, TestingModule } from '@nestjs/testing';
import { KeysService, PREPARED_KEYS_QTTY } from './keys.service';
import { RSAKey } from 'src/orm/entities/RSAKey';
import { Entry } from 'src/orm/entities/Entry';
import moment from 'moment';
import { EntriesService } from './entries.service';
import { v4 as uuid } from 'uuid';
import { unitTestingModuleConfig } from 'src/../test/prepare';

describe('KeysService', () => {
  let rotatableEntry: Entry;
  let nonRotatableEntry: Entry;
  let testModule: TestingModule;
  let keysService: KeysService;
  let entriesService: EntriesService;
  let key: RSAKey;

  const fakeAccount = {
    id: 1,
    login: 'test',
    isAdmin: true,
  };

  const getItervals = (keys: RSAKey[]): number => {
    return keys.reduce((all, curr, i) => {
      if (i === 0) {
        return curr.expiresAt - curr.activatesAt;
      }
      return all + curr.expiresAt - keys[i - 1].expiresAt;
    }, 0);
  };

  beforeAll(async () => {
    testModule = await Test.createTestingModule({
      ...unitTestingModuleConfig,
      providers: [KeysService, EntriesService],
    }).compile();

    testModule.useLogger(null);

    keysService = testModule.get<KeysService>(KeysService);
    entriesService = testModule.get<EntriesService>(EntriesService);

    rotatableEntry = await entriesService.createEntry({
      accountId: fakeAccount.id,
      name: 'Rotatable entry',
      code: uuid(),
      rotationPeriod: '5 s',
    });

    nonRotatableEntry = await entriesService.createEntry({
      accountId: fakeAccount.id,
      name: 'Non rotatable entry',
      code: 'test 2',
    });
  });

  afterAll(async () => {
    await testModule.close();
  });

  describe('createKey', () => {
    it('should non-limited rsa key for non-rotatable entry', async () => {
      const beforeCreationMoment = Math.floor(new Date().getTime() / 1000);
      key = await keysService.createKey(nonRotatableEntry);

      expect(key).toMatchObject({
        entryId: nonRotatableEntry.id,
        expiresAt: null,
      });

      expect(key.activatesAt).not.toBeLessThan(beforeCreationMoment);
      expect(key.activatesAt).toBeLessThanOrEqual(
        Math.round(new Date().getTime() / 1000),
      );
    });

    it('should create limited key for non-rotatable entry', async () => {
      const startMoment = moment().unix();
      const expireMoment = moment().add(3, 's').unix();

      const key = await keysService.createKey(
        nonRotatableEntry,
        startMoment,
        expireMoment,
      );

      expect(key.entryId).toBe(nonRotatableEntry.id);
      expect(key.expiresAt).toBe(expireMoment);
      expect(key.activatesAt).toBe(startMoment);
    });
  });

  describe('createRotatableSet', () => {
    it('should add keys set for rotatable entry', async () => {
      const entry = await entriesService.createEntry({
        accountId: fakeAccount.id,
        name: 'Some test rotatable entry',
        code: uuid(),
        rotationPeriod: '5 s',
      });

      const keys = await keysService.createRotatableSet(entry);

      expect(keys.length).toBe(PREPARED_KEYS_QTTY);
      expect(getItervals(keys)).toBe(
        rotatableEntry.rotateInterval * PREPARED_KEYS_QTTY,
      );
    });
  });

  describe('getKeysList', () => {
    it('should return keys for storage view', async () => {
      const result = await keysService.getKeysList();
      expect(result.items).toBeDefined();
    });
  });

  describe('checkAndGetKeysByEntry', () => {
    it('should check keys available for entry, refill them or recreate set if required', async () => {
      const keys = await keysService.checkAndGetKeysByEntry(rotatableEntry);
      expect(keys.length).toBe(PREPARED_KEYS_QTTY);
      expect(getItervals(keys)).toBe(
        rotatableEntry.rotateInterval * PREPARED_KEYS_QTTY,
      );
    });
  });

  describe('getKeyById', () => {
    it('should throw not found error for not existed key', async () => {
      await expect(keysService.getKeyById(1000)).rejects.toThrow(
        'Key not found',
      );
    });

    it('should throw forbidden error, if user has no access for key', async () => {
      await expect(
        keysService.getKeyById(key.kid, { userIdForCheck: 5 }),
      ).rejects.toThrow('Access denied');
    });
  });

  describe('removeKey', () => {
    it('should remove keys', async () => {
      const res = await keysService.removeKey(key.kid);
      expect(res.deletedIds).toStrictEqual([key.kid]);
    });

    it('should throw error, if key not found', async () => {
      await expect(keysService.removeKey(key.kid)).rejects.toThrow(
        'Key not found',
      );
    });
  });

  if (!process.env.PASS_LONG_TASKS) {
    describe('-- key rotation checker', () => {
      jest.setTimeout(30000);
      const sleep = (ms: number) =>
        new Promise((r) => setTimeout(() => r(), ms));

      it('should return only active keys without recreation', async () => {
        const entry = await entriesService.createEntryWithKeys({
          name: 'Temporary rotatable key',
          code: uuid(),
          accountId: fakeAccount.id,
          rotationPeriod: '3 s',
        });

        let keys = await keysService.getActiveKeysSetByEntry(entry);
        expect(keys.length).toBe(PREPARED_KEYS_QTTY);

        await sleep(4500);

        for (let i = 1; i < PREPARED_KEYS_QTTY; i++) {
          keys = await keysService.getActiveKeysSetByEntry(entry);
          expect(keys.length).toBe(PREPARED_KEYS_QTTY - i);

          await sleep(3000);

          expect(keys[0].expiresAt).toBe(entry.rsakeys[i].expiresAt);
        }

        await sleep(3000);
        keys = await keysService.getActiveKeysSetByEntry(entry);
        expect(keys.length).toBe(0);
      });

      it('should append keys when keys quantity less then required, but not zero', async () => {
        const entry = await entriesService.createEntryWithKeys({
          name: 'Temporary rotatable key',
          code: uuid(),
          accountId: fakeAccount.id,
          rotationPeriod: '1 s',
        });

        await sleep(2700);

        const keys = await keysService.checkAndGetKeysByEntry(entry);
        expect(keys.length).toBe(PREPARED_KEYS_QTTY);
        expect(getItervals(keys)).toBe(
          entry.rotateInterval * PREPARED_KEYS_QTTY,
        );
      });

      it('should recreate all keys, if all expired', async () => {
        const entry = await entriesService.createEntryWithKeys({
          name: 'Temporary rotatable key',
          code: uuid(),
          accountId: fakeAccount.id,
          rotationPeriod: '1 s',
        });

        await sleep(1000 * (PREPARED_KEYS_QTTY + 1));

        const keys = await keysService.checkAndGetKeysByEntry(entry);
        expect(keys.length).toBe(PREPARED_KEYS_QTTY);
        expect(getItervals(keys)).toBe(
          entry.rotateInterval * PREPARED_KEYS_QTTY,
        );
      });
    });
  }
});
