import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';

import { RSAKey } from 'src/orm/entities/RSAKey';
import { Account } from 'src/orm/entities/Account';
import { Entry } from 'src/orm/entities/Entry';
import { KeysRepo } from 'src/orm/repos/KeysRepo';

import { KeysController } from './keys.controller';
import { EntriesService } from './services/entries.service';
import { KeysService } from './services/keys.service';
import { EntriesController } from './entries.controller';
import { PublicEntriesController } from './public.controller';

@Module({})
export class KeysModule {
  static register(opts: { isPublic: boolean }): DynamicModule {
    return {
      module: KeysModule,
      imports: [TypeOrmModule.forFeature([RSAKey, Account, Entry, KeysRepo])],
      controllers: opts.isPublic
        ? [PublicEntriesController]
        : [KeysController, EntriesController],
      providers: [KeysService, EntriesService],
      exports: [KeysService, EntriesService],
    };
  }
}
