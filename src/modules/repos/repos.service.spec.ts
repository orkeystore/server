import { v4 as uuid } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { Entry } from 'src/orm/entities/Entry';
import { DTOReposCreateRequest } from './dto/DTOReposCreateRequest';
import { ReposModule } from './repos.module';
import { ReposService } from './repos.service';
import { KeysModule } from '../keys/keys.module';
import { EntriesService } from '../keys/services/entries.service';
import { Repo } from 'src/orm/entities/Repo';
import { unitTestingModuleConfig } from 'test/prepare';

describe('ReposService', () => {
  let testModule: TestingModule;
  let reposService: ReposService;
  let entriesService: EntriesService;

  beforeAll(async () => {
    testModule = await Test.createTestingModule({
      imports: [...unitTestingModuleConfig.imports, ReposModule, KeysModule],
    }).compile();

    testModule.useLogger(null);
    reposService = testModule.get<ReposService>(ReposService);
    entriesService = testModule.get<EntriesService>(EntriesService);
  });

  describe('createRepo', () => {
    let entry: Entry;

    beforeAll(async () => {
      entry = await entriesService.createEntryWithKeys({
        accountId: 1,
        name: 'New',
        accessToken: 'new',
        code: 'new',
      });
    });

    it('should create new repo and prevent duplicates', async () => {
      const data: Omit<DTOReposCreateRequest, 'keys'> = {
        name: 'Test',
        code: `test_${uuid()}`,
        accessToken: 'test_access',
      };

      const result = await reposService.createRepo(
        { ...data, keys: [entry.code] },
        1,
      );
      expect(result).toMatchObject(data);

      await expect(
        reposService.createRepo({ ...data, keys: [entry.code] }, 1),
      ).rejects.toThrow();
    });

    it('should throw error with not found errors', async () => {
      const data: DTOReposCreateRequest = {
        name: 'Test',
        code: `test_${uuid()}`,
        accessToken: 'test_access',
        keys: ['wrong_code'],
      };

      await expect(reposService.createRepo(data, 1)).rejects.toThrow(
        'Entries not found',
      );
    });
  });

  describe('removeRepos', () => {
    it('should throw error with attempt to delete not existed repo', async () => {
      await expect(reposService.removeRepos([100], 1)).rejects.toThrow();
    });
  });

  describe('getRepoBunch', () => {
    let repo: Repo;
    beforeAll(async () => {
      const entry = await entriesService.createEntryWithKeys({
        accountId: 1,
        name: 'New',
        accessToken: 'new',
        code: uuid(),
      });

      const data: Omit<DTOReposCreateRequest, 'keys'> = {
        name: 'Test',
        code: `test_${uuid()}`,
        accessToken: 'test_access',
      };

      repo = await reposService.createRepo({ ...data, keys: [entry.code] }, 1);
    });

    it('should throw not found error, if target repo not exist', async () => {
      await expect(
        reposService.getRepoBunch('not_existed_code'),
      ).rejects.toThrow('Repository not found');
    });

    it('should throw forbidden error, if access token incorrect', async () => {
      await expect(
        reposService.getRepoBunch(repo.code, 'weong_access_token'),
      ).rejects.toThrow('Invalid access token');
    });
  });
});
