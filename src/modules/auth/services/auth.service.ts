import { JWK } from 'jose';
import { Repository, In } from 'typeorm';
import bcrypt from 'bcrypt';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import moment from 'moment';
import { ConfigService } from '@nestjs/config';
import { Account } from 'src/orm/entities/Account';
import { AppLogger } from 'src/modules/logger/logger.service';
import { EntriesService } from 'src/modules/keys/services/entries.service';
import { JwtService } from './jwt.service';
import { DTOAuthUser } from '../dto/DTOAuthUser';
import { DTOCreateAccountParams } from '../dto/DTOCreateAccountParams';

export type SystemKey = {
  key: JWK.RSAKey;
  expires: number;
};

@Injectable()
export class AuthService {
  private readonly hashSaltRounds: number | string;
  private systemKey?: SystemKey;

  constructor(
    private readonly logger: AppLogger,
    private configService: ConfigService,
    private jwtService: JwtService,
    private readonly entriesService: EntriesService,
    @InjectRepository(Account)
    private readonly accRepo: Repository<Account>,
  ) {
    this.logger.setContext('AuthService');
    this.hashSaltRounds = this.configService.get('salt') || 5;
  }

  async createInitialAccount(): Promise<void> {
    const authData: DTOAuthUser = this.configService.get('auth');
    const user = await this.accRepo.findOne({ login: authData.username });
    const hash = await this.getHash(authData.password);

    if (user === undefined) {
      await this.accRepo.delete({ isAdmin: true });
      await this.createAccount({
        login: authData.username,
        password: authData.password,
        isAdmin: true,
      });
    } else if (user.password !== hash) {
      user.password = hash;
      await this.accRepo.save(user);
    }
  }

  async setSystemKey(): Promise<SystemKey> {
    const keyData = await this.entriesService.getSystemEntryWithKey();
    this.systemKey = { key: keyData.key, expires: keyData.expires };
    return keyData;
  }

  async getSystemKey(): Promise<SystemKey> {
    const currentMoment = moment().unix();

    if (this.systemKey && this.systemKey.expires >= currentMoment) {
      return this.systemKey;
    }

    return await this.setSystemKey();
  }

  async getHash(target: string): Promise<string> {
    return await bcrypt.hash(target, this.hashSaltRounds);
  }

  async checkHash(target: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(target, hash);
  }

  async createAccount(data: DTOCreateAccountParams): Promise<Account> {
    try {
      const password = await this.getHash(data.password);
      const acc = this.accRepo.create({ ...data, password });
      return await this.accRepo.save(acc);
    } catch (err) {
      if (err.code === 'SQLITE_CONSTRAINT' && err.message.includes('UNIQUE')) {
        throw new HttpException(
          'Account with same login already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw err;
    }
  }

  async removeAccounts(ids: number[]): Promise<number[]> {
    const accounts = await this.accRepo.find({ where: { id: In(ids) } });

    if (ids.includes(1)) {
      throw new BadRequestException(`Can't delete initial user`);
    }

    if (accounts.length !== ids.length) {
      throw new NotFoundException();
    }

    await this.accRepo.remove(accounts);

    return ids;
  }

  async getAccounts(): Promise<Account[]> {
    return await this.accRepo.find();
  }

  async validateAccount(
    username: string,
    pass: string,
  ): Promise<Express.User | null> {
    const user = await this.accRepo.findOne({ login: username });

    if (!user) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, entries, ...accountData } = user;

    const isPassed = await this.checkHash(pass, user.password);
    return isPassed ? accountData : null;
  }

  async getAccountById(target: number): Promise<Express.User> {
    const account = await this.accRepo.findOne(target);

    if (account === undefined) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, entries, ...other } = account as Account;
    return other;
  }

  async login(account: Express.User): Promise<{ token: string }> {
    const payload = { account: account.id };

    return {
      token: await this.jwtService.sign(payload, {}),
    };
  }

  setSystemKeyExpiration(unixMoment: number): void {
    if (this.systemKey) {
      this.systemKey.expires = unixMoment;
    }
  }

  resetSystemKey(): void {
    this.systemKey = undefined;
  }
}

export const authServiceProvider = {
  provide: AuthService,
  useFactory: async (
    logger: AppLogger,
    configService: ConfigService,
    jwtService: JwtService,
    accRepo: Repository<Account>,
    entriesService: EntriesService,
  ): Promise<AuthService> => {
    const service = new AuthService(
      logger,
      configService,
      jwtService,
      entriesService,
      accRepo,
    );

    await service.createInitialAccount();
    await service.setSystemKey();

    // Initiation inside this provider justified (initial account required)
    await entriesService.generateEntriesFromEnv();

    return service;
  },
  inject: [
    AppLogger,
    ConfigService,
    JwtService,
    getRepositoryToken(Account),
    EntriesService,
  ],
};
