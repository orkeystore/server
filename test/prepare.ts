import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { DTOCreateAccountParams } from 'src/modules/auth/dto/DTOCreateAccountParams';
import { AppModule, prepareApp, resolveEnvConfigPath } from 'src/app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { loadTestDbConnectionConfig } from 'src/modules/config/db.config';
import { loadEnvConfig } from 'src/modules/config/env.config';
import { TypeORMConfig } from 'src/modules/config/orm.config';
import { UtilsModule } from 'src/modules/utils/utils.module';
import { Account } from 'src/orm/entities/Account';
import { Entry } from 'src/orm/entities/Entry';
import { RSAKey } from 'src/orm/entities/RSAKey';
import { KeysRepo } from 'src/orm/repos/KeysRepo';
import { LoggerModule } from 'src/modules/logger/logger.module';
import { AppLogger } from 'src/modules/logger/logger.service';

export const prepareTestApp = async (
  isPublic?: boolean,
): Promise<INestApplication> => {
  process.env.ENV_FILE = '.testing.env';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const module = isPublic
    ? AppModule.registerPublic({ isTestDB: true })
    : AppModule.registerPrivate({ isTestDB: true });

  const moduleRef = await Test.createTestingModule({
    imports: [module],
  }).compile();

  const app = moduleRef.createNestApplication();

  return prepareApp(app);
};

export const getAdminToken = async (app: INestApplication): Promise<string> => {
  const res = await request(app.getHttpServer())
    .post('/auth/token')
    .send({ username: 'admin', password: 'password' });

  return res.body.token;
};

export const getSimpleToken = async (
  app: INestApplication,
  adminToken: string,
): Promise<{ token: string; accountId: number }> => {
  const fakeAccount: DTOCreateAccountParams = {
    isAdmin: false,
    login: 'fakeUser',
    password: 'fakePassword',
  };

  const accRes = await request(app.getHttpServer())
    .post('/auth/account')
    .send(fakeAccount)
    .set('Authorization', `Bearer ${adminToken}`);

  const res = await request(app.getHttpServer())
    .post('/auth/token')
    .send({ username: fakeAccount.login, password: fakeAccount.password });

  return {
    token: res.body.token as string,
    accountId: accRes.body.id as number,
  };
};

export const unitTestingModuleConfig = {
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadEnvConfig, loadTestDbConnectionConfig],
      envFilePath: resolveEnvConfigPath(),
    }),
    UtilsModule,
    LoggerModule,
    TypeOrmModule.forRootAsync({
      imports: [LoggerModule, ConfigModule],
      inject: [AppLogger, ConfigService],
      useClass: TypeORMConfig,
    }),
    TypeOrmModule.forFeature([RSAKey, Account, Entry, KeysRepo]),
    AuthModule,
  ],
};
