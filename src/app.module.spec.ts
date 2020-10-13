import { bootstrap, resolveEnvConfigPath } from './app.module';

type Route = {
  path: string;
  method: string;
};

describe('AppModule', () => {
  it('should init app without errors', async () => {
    const app = await bootstrap({ isPublic: false }, { logger: false });
    await app.close();
  });

  it('should return only public routes', async () => {
    const publicApp = await bootstrap({ isPublic: true }, { logger: false });
    await publicApp.init();
    const server = publicApp.getHttpServer();
    const { stack } = server._events.request._router;

    const availableRoutes: [] = stack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    await publicApp.close();
  });

  it('should return default filename for env file', () => {
    const storeVal = process.env['ENV_FILE'];
    delete process.env['ENV_FILE'];
    expect(resolveEnvConfigPath()).toBe('.env');
    process.env['ENV_FILE'] = storeVal;
  });
});
