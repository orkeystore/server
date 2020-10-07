import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthService, authServiceProvider } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtService } from './services/jwt.service';
import { KeysModule } from '../keys/keys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RSAKey } from 'src/orm/entities/RSAKey';
import { Account } from 'src/orm/entities/Account';
import { Entry } from 'src/orm/entities/Entry';

@Module({
  imports: [
    PassportModule,
    KeysModule.register({ isPublic: false }),
    TypeOrmModule.forFeature([RSAKey, Account, Entry]),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, authServiceProvider, JwtStrategy, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
