import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import moment from 'moment';
import { unitTestingModuleConfig } from 'test/prepare';
import { DTOAuthUser } from '../dto/DTOAuthUser';
import { DTOCreateAccountParams } from '../dto/DTOCreateAccountParams';
import { AuthService } from './auth.service';

describe('AuthService (src/modules/auth/services/auth.service.ts)', () => {
  let testModule: TestingModule;
  let authService: AuthService;
  let configService: ConfigService;

  beforeAll(async () => {
    testModule = await Test.createTestingModule({
      ...unitTestingModuleConfig,
    }).compile();

    testModule.useLogger(null);
    authService = testModule.get<AuthService>(AuthService);
    configService = testModule.get<ConfigService>(ConfigService);
  });

  afterAll(async () => {
    await testModule.close();
  });

  describe('getAccountById', () => {
    it('should throw error for unexisted user', async () => {
      await expect(authService.getAccountById(154)).rejects.toThrow(
        'User not found',
      );
    });
  });

  describe('getSystemKey', () => {
    it('should reset systemKey expire moment', async () => {
      const expireMoment = moment().unix() - 1;
      authService.setSystemKeyExpiration(expireMoment);
      await authService.getSystemKey();
    });

    it('should reset systemKey', async () => {
      authService.resetSystemKey();
      authService.setSystemKeyExpiration(moment().unix() - 1);
      const { key } = await authService.getSystemKey();
      expect(key.kty).toBe('RSA');
    });
  });

  describe('createAccount', () => {
    it('should throw non-handled error', async () => {
      expect(
        authService.createAccount({
          isAdmin: false,
          login: '',
        } as DTOCreateAccountParams),
      ).rejects.toThrowError();
    });
  });

  describe('createInitialAccount', () => {
    it('should pass recreation if account already exists', async () => {
      await authService.createInitialAccount();
    });

    it('should throw error when attempt to create account with same login', async () => {
      const authData = configService.get<DTOAuthUser>('auth');
      await expect(
        authService.createAccount({
          login: authData.username,
          password: authData.password,
          isAdmin: false,
        }),
      ).rejects.toThrow('Account with same login already exists');
    });
  });
});
