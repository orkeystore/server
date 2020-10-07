import os from 'os';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { unitTestingModuleConfig } from 'test/prepare';
import { EntriesService } from '../keys/services/entries.service';
import { KeysService } from '../keys/services/keys.service';
import { loadDbConnectionConfig } from './db.config';
import { checkEnvironment, loadEnvConfig, requiredEnvVars } from './env.config';
import { TypeORMConfig } from './orm.config';

describe('Configs', () => {
  let testModule: TestingModule;
  let typeORMConfig: TypeORMConfig;

  beforeAll(async () => {
    process.env.ADMIN_USERNAME = 'admin';
    process.env.ADMIN_PASSWORD = 'password';
    process.env.DATABASE_PATH = path.resolve(`${os.tmpdir()}/testdb.sqlite`);
    process.env.KEYS_HOST = 'http://localhost';

    testModule = await Test.createTestingModule({
      ...unitTestingModuleConfig,
      providers: [EntriesService, KeysService],
    }).compile();

    typeORMConfig = testModule.get<TypeORMConfig>(TypeORMConfig);
  });

  it('should return valid db config', async () => {
    const { db } = await loadDbConnectionConfig();
    expect(typeof db.type).toBe('string');
  });

  it('should throw error when check env', async () => {
    expect(() => checkEnvironment({}, requiredEnvVars)).toThrowError();
  });

  it('should to return config', () => {
    let res = loadEnvConfig();
    expect(res.systemKeyRotationPeriod).toBe('10_days');
    process.env.SYSTEM_KEY_ROTATION = '20_days';
    res = loadEnvConfig();
    expect(res.systemKeyRotationPeriod).toBe('20_days');
  });

  it('should create and prepare db, if not exists', async () => {
    const targetPath = path.resolve(`${os.tmpdir()}/${uuid()}testDb.sqlite`);
    await typeORMConfig.prepareDB({
      type: 'sqlite',
      database: targetPath,
      name: uuid(),
    });
  });
});
