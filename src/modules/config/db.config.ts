import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from 'src/orm/entities';

import { baseTables1595845436493 } from 'src/orm/migrations/1595845436493-baseTables';

export const loadDbConnectionConfig = async (): Promise<{
  db: TypeOrmModuleOptions;
}> => {
  const isInMemory = process.env.DATABASE_PATH === ':memory:';
  const databaseDir = process.env.DATABASE_PATH || '/opt/orkeystore';
  const targetDb = isInMemory ? ':memory:' : `${databaseDir}/orkeystore.db`;

  const conf: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: targetDb,
    entities,
    // key: process.env.DATABASE_KEY, // TODO: db encription
    // logging: "all",
    synchronize: false,
    migrations: [baseTables1595845436493],
    migrationsRun: true,
    keepConnectionAlive: true,
  };

  return { db: conf };
};

export const loadTestDbConnectionConfig = async (): Promise<{
  db: TypeOrmModuleOptions;
}> => {
  const conf: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities,
    synchronize: false,
    migrations: [baseTables1595845436493],
    migrationsRun: true,
    autoLoadEntities: true,
    keepConnectionAlive: true,
  };

  return { db: conf };
};

export default {};
