import { TestingModule, Test } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';
import { Entry } from 'src/orm/entities/Entry';
import { unitTestingModuleConfig } from 'test/prepare';
import { EntriesService } from './entries.service';
import { KeysService } from './keys.service';

describe('EntriesService', () => {
  let testModule: TestingModule;
  let entriesService: EntriesService;
  let rotatableEntry: Entry;
  let nonRotatableEntry: Entry;

  const fakeAccount = {
    id: 1,
    login: 'test',
    isAdmin: true,
  };

  beforeAll(async () => {
    testModule = await Test.createTestingModule({
      ...unitTestingModuleConfig,
      providers: [EntriesService, KeysService],
    }).compile();

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

  describe('getEntryByCode', () => {
    it('should throw not found error', async () => {
      await expect(
        entriesService.getEntryByCode('not_existed_code'),
      ).rejects.toThrow('Entry not found');
    });
  });

  describe('deleteEntryById', () => {
    it(`should throw bad request error, if we try to delete system entry`, async () => {
      await expect(entriesService.deleteEntryById(1)).rejects.toThrow(
        `Can't delete system key`,
      );
    });
  });

  describe('getEntryWithCodeAccessCheck', () => {
    it(`should throw forbidden error, if we try to access entry with wrong access token`, async () => {
      await expect(
        entriesService.getEntryWithCodeAccessCheck(
          rotatableEntry.code,
          'wrong_token',
        ),
      ).rejects.toThrow('Entry forbidden');
    });
  });

  describe('getEntriesList', () => {
    it('should return entries filtered by name', async () => {
      const result = await entriesService.getEntriesList(
        fakeAccount.id,
        undefined,
        nonRotatableEntry.name,
      );

      expect(result.items.length).toBe(1);
      expect(result.items[0]).toMatchObject({
        code: nonRotatableEntry.code,
      });
    });
  });

  describe(`parseKeysFromEnv`, () => {
    it('should return empty array', async () => {
      const result = entriesService.parseKeys(undefined);
      expect(result.length).toBe(0);
    });

    it(`should return IEntryCreateParams[]`, () => {
      const result = entriesService.parseKeys(
        'hasura:14_days:ajlkruirnls,test:5_weeks:jlnsrgunisn',
      );
      expect(result.length).toBe(2);
    });

    it('should throw error with wrong keys format', () => {
      expect(() => entriesService.parseKeys('wrong_format')).toThrow(
        'Wrong format recieved from env variable GENERATE_KEYS',
      );
    });
  });
});
