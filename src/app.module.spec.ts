import { INestApplication } from '@nestjs/common';
import { bootstrap, resolveEnvConfigPath } from './app.module';

type Route = {
  path: string;
  method: string;
};

describe('AppModule', () => {
  let publicApp: INestApplication;

  it('should return default filename for env file', () => {
    const storeVal = process.env['ENV_FILE'];
    delete process.env['ENV_FILE'];
    expect(resolveEnvConfigPath()).toBe('.env');
    process.env['ENV_FILE'] = storeVal;
  });

  it('should init app without errors', async () => {
    process.env['ENV_FILE'] = '.develop.env';
    process.env['SWAGGER'] = '1';
    await expect(
      (async () => {
        const app = await bootstrap(undefined, { logger: false });
        await app.close();
        delete process.env['SWAGGER'];
        publicApp = await bootstrap({ isPublic: true }, { logger: false });
        await publicApp.init();
      })(),
    ).resolves.not.toThrow();
  });

  it('should return only public routes', async () => {
    const server = publicApp.getHttpServer();
    const { stack } = server._events.request._router;

    const availableRoutes: [] = stack
      .map((layer: any): Route | undefined => {
        if (layer.route) {
          return {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          };
        }
        return undefined;
      })
      .filter((item: Route | undefined) => item !== undefined);
    expect(availableRoutes.length).toBe(3);
  });

  afterAll(async () => {
    publicApp.close();
  });
});
