import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AppLogger } from '../logger/logger.service';

@Injectable()
export class TypeORMConfig {
  constructor(
    private readonly logger: AppLogger,
    private readonly configService: ConfigService,
  ) {
    logger.setContext('TypeOrmConfig');
  }

  async createTypeOrmOptions(): Promise<SqliteConnectionOptions> {
    const config: SqliteConnectionOptions = this.configService.get('db');
    await this.prepareDB(config);
    return config;
  }

  async prepareDB(conf: SqliteConnectionOptions): Promise<void> {
    try {
      await fs.promises.stat(`${conf.database}`);
      this.logger.log(
        `Use existing sqlite database located in ${conf.database}`,
      );
    } catch (err) {
      if (err.code === 'ENOENT') {
        this.logger.log(`Create sqlite database in ${conf.database}`);
        await this.createDB(conf.database);
        return;
      }
      /* istanbul ignore next */
      throw err;
    }
  }

  async createDB(database: string /* key: string */): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const isInMemory = database === ':memory:';
        const { Database } = sqlite3.verbose();

        if (!isInMemory) {
          fs.mkdirSync(path.dirname(database), { recursive: true });
        }

        const db = new Database(database);

        /*
        if (process.env['SQLCIPHER'] === '1') {
          db.serialize(function() {
            db.run(`PRAGMA key = '${key}'`);
          });
        }
        */

        db.close(() => {
          resolve();
        });
      } catch (err) {
        /* istanbul ignore next */
        reject(err);
      }
    });
  }
}
