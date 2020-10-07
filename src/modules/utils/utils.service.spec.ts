import { UtilsService } from './utils.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { loadTestDbConnectionConfig } from '../config/db.config';
import { loadEnvConfig } from '../config/env.config';
import { UtilsModule } from './utils.module';
import { resolveEnvConfigPath } from 'src/app.module';

describe('UtilsService', () => {
  let utilsService: UtilsService;
  let testModule: TestingModule;

  beforeAll(async () => {
    testModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [loadEnvConfig, loadTestDbConnectionConfig],
          envFilePath: resolveEnvConfigPath(),
        }),
        UtilsModule,
      ],
      controllers: [],
      providers: [],
    }).compile();

    testModule.useLogger(null);
    utilsService = testModule.get<UtilsService>(UtilsService);
  });

  afterAll(async () => {
    await testModule.close();
  });

  describe('getOrmPagination', () => {
    it('should return orm pagination with default params', () => {
      const { skip, take } = utilsService.getOrmPagination(100);
      expect(skip).toBe(0);
      expect(take).toBeGreaterThan(0);
    });

    it('should return orm pagination with specified params', () => {
      const { skip, take } = utilsService.getOrmPagination(100, {
        page: 2,
        perPage: 10,
      });
      expect(skip).toBe(10 * (2 - 1));
      expect(take).toBe(10);
    });

    it('should return skip limited by count', () => {
      const { skip } = utilsService.getOrmPagination(100, {
        page: 11,
        perPage: 10,
      });
      expect(skip).toBeLessThan(100);
    });
  });
});
