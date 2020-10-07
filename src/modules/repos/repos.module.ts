import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from 'src/orm/entities/Repo';
import { Entry } from 'src/orm/entities/Entry';
import { KeysModule } from '../keys/keys.module';
import { reposServiceProvider } from './repos.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Entry, Repo]),
    KeysModule.register({ isPublic: false }),
  ],
  exports: [],
  providers: [reposServiceProvider],
  controllers: [ReposController],
})
export class ReposModule {}
