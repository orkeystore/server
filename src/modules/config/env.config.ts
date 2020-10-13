import { DTOAuthUser } from '../auth/dto/DTOAuthUser';

export const requiredEnvVars = ['ADMIN_PASSWORD'];

export interface IEnvConfig {
  auth: DTOAuthUser;
  hosts: {
    private?: string;
    public?: string;
  };
  systemKeyRotationPeriod: string;
  defaultPager: { page: number; perPage: number };
}

export const loadEnvConfig = (): IEnvConfig => {
  checkEnvironment(process.env, requiredEnvVars);
  const systemKeyRotationPeriod = process.env.SYSTEM_KEY_ROTATION || '10_days';

  const config = {
    auth: {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD,
    },
    hosts: {
      private: process.env.PRIVATE_HOST
        ? `${process.env.PRIVATE_HOST}`
        : undefined,
      public: process.env.PUBLIC_HOST
        ? `${process.env.PUBLIC_HOST}`
        : undefined,
    },
    systemKeyRotationPeriod,
    defaultPager: { page: 1, perPage: 20 },
  };

  return config;
};

export const checkEnvironment = (
  env: NodeJS.ProcessEnv,
  requiredEnvVars: string[],
): void => {
  requiredEnvVars.forEach((prop) => {
    if (env[prop] === undefined) {
      throw new Error(
        `${prop} environment variable was not provided. Please, set variable.`,
      );
    }
  });
};
