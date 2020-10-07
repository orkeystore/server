import { join } from 'path';
import {
  DynamicModule,
  INestApplication,
  LogLevel,
  NestApplicationOptions,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { loadEnvConfig } from 'src/modules/config/env.config';
import { KeysModule } from 'src/modules//keys/keys.module';
import {
  loadDbConnectionConfig,
  loadTestDbConnectionConfig,
} from 'src/modules/config/db.config';
import { TypeORMConfig } from 'src/modules/config/orm.config';
import { ReposModule } from 'src/modules/repos/repos.module';
import { loadConstantsConfig } from 'src/modules/config/constants.config';
import { UtilsModule } from './modules/utils/utils.module';
import { NestFactory } from '@nestjs/core';
import passport from 'passport';
import { initSwagger } from './swagger';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerModule } from './modules/logger/logger.module';
import { AppLogger } from './modules/logger/logger.service';

export const resolveEnvConfigPath = (): string => {
  return process.env.ENV_FILE || '.env';
};

export interface IAppRegisterOptions {
  isTestDB?: boolean;
  isPublic?: boolean;
}

const getStaticImports = (opts: IAppRegisterOptions) => {
  const envFilePath = resolveEnvConfigPath();
  return [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        loadConstantsConfig,
        loadEnvConfig,
        opts.isTestDB ? loadTestDbConnectionConfig : loadDbConnectionConfig,
      ],
      envFilePath,
    }),
    UtilsModule,
    LoggerModule,
    TypeOrmModule.forRootAsync({
      imports: [LoggerModule, ConfigModule],
      inject: [AppLogger, ConfigService],
      useClass: TypeORMConfig,
    }),
  ];
};

export class AppModule {
  static registerPrivate(opts: IAppRegisterOptions = {}): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ...getStaticImports(opts),
        AuthModule,
        KeysModule.register({ isPublic: false }),
        ReposModule,
        ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'spa'),
        }),
      ],
    };
  }

  static registerPublic(opts: IAppRegisterOptions = {}): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ...getStaticImports(opts),
        KeysModule.register({ isPublic: true }),
      ],
    };
  }
}

export async function bootstrap(
  opts: IAppRegisterOptions = {},
  appParams?: NestApplicationOptions,
): Promise<INestApplication> {
  const devLogLevels: LogLevel[] = ['debug', 'error', 'log', 'verbose', 'warn'];
  const prodLogLevels: LogLevel[] = ['warn', 'error', 'log'];
  const isDev = process.env.DEV === '1';

  const logger = isDev ? devLogLevels : prodLogLevels;
  const params: NestApplicationOptions = {
    logger,
    cors: { origin: isDev, credentials: true },
  };
  const module = opts.isPublic
    ? AppModule.registerPublic()
    : AppModule.registerPrivate();

  const app = await NestFactory.create(module, { ...params, ...appParams });

  return prepareApp(app);
}

export const prepareApp = async (
  app: INestApplication,
): Promise<INestApplication> => {
  app.use(passport.initialize());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  if (process.env.SWAGGER) {
    await initSwagger(app);
  }

  return app;
};
