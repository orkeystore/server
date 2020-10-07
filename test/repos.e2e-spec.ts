import { HttpStatus, INestApplication } from '@nestjs/common';
import { DTOReposBanchResponse } from 'src/modules/repos/dto/DTOReposBanchResponse';
import { DTOReposCreateRequest } from 'src/modules/repos/dto/DTOReposCreateRequest';
import { DTOReposRemoveRequest } from 'src/modules/repos/dto/DTOReposRemoveRequest';
import { Entry } from 'src/orm/entities/Entry';
import { Repo } from 'src/orm/entities/Repo';
import { IPaged } from 'src/types';
import request from 'supertest';
import { prepareTestApp, getAdminToken, getSimpleToken } from './prepare';
import { createKeysSet, getItemsDTOCreateKey } from './_.data.mock';

describe('Repos module', () => {
  let simpleAccountId: number;
  let app: INestApplication;
  let adminToken: string;
  let simpleToken: string;
  let nonRotatableNonAdminKeys: Omit<Entry, 'account'>[];
  let rotatableAdminKeys: Omit<Entry, 'account'>[];
  let nonAdminRepo: Repo;
  let adminRepo: Repo;

  beforeAll(async () => {
    app = await prepareTestApp();
    await app.init();

    adminToken = await getAdminToken(app);
    const simple = await getSimpleToken(app, adminToken);
    simpleToken = simple.token;
    simpleAccountId = simple.accountId;

    nonRotatableNonAdminKeys = await createKeysSet(
      app,
      getItemsDTOCreateKey(5),
      simpleToken,
    );

    rotatableAdminKeys = await createKeysSet(
      app,
      getItemsDTOCreateKey(2),
      adminToken,
    );
  });

  it('should be token and id', () => {
    expect(typeof simpleToken).toBe('string');
    expect(typeof simpleAccountId).toBe('number');
  });

  describe('POST /repo/create', () => {
    it('attempt to create repo with non-admin token', async () => {
      const payload: DTOReposCreateRequest = {
        name: 'Test repo',
        description: 'Test repo description',
        code: 'uniq_repo_code',
        accessToken: 'access_code_for_repo',
        keys: nonRotatableNonAdminKeys.map(({ code }) => code),
      };

      const res = await request(app.getHttpServer())
        .post('/repo/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send(payload)
        .expect(HttpStatus.CREATED);

      nonAdminRepo = res.body as Repo;
      expect(nonAdminRepo.entries.length).toBe(nonRotatableNonAdminKeys.length);
    });

    it('attempt to create repo with admin token', async () => {
      const payload: DTOReposCreateRequest = {
        name: 'Test admin repo',
        description: 'Test admin repo description',
        code: 'uniq_repo_code_admin',
        accessToken: 'access_code_for_repo',
        keys: rotatableAdminKeys.map(({ code }) => code),
      };

      await request(app.getHttpServer())
        .post('/repo/create')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect((res) => {
          expect(res.status).toBe(HttpStatus.CREATED);

          adminRepo = res.body as Repo;
          const { keys, ...rest } = payload;
          expect(adminRepo).toMatchObject(rest);
          expect(adminRepo.entries.length).toBe(keys.length);
          expect(adminRepo.id).toBeDefined();
        });
    });
  });

  describe('POST /repo/bunch/:code', () => {
    it(`attempt to get bunch data from non-admin-repo`, async () => {
      await request(app.getHttpServer())
        .post(`/repo/bunch/${nonAdminRepo.code}`)
        .send({ accessToken: nonAdminRepo.accessToken })
        .expect((res) => {
          expect(res.status).toBe(HttpStatus.ACCEPTED);
          const result = res.body as DTOReposBanchResponse;
          expect(result).toBeDefined();
        });
    });
  });

  describe(`GET /repo/list`, () => {
    it('attempt to get repos list for admin user', async () => {
      await request(app.getHttpServer())
        .get(`/repo/list`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then((res) => {
          expect(res.status).toBe(HttpStatus.OK);
          const result = res.body as IPaged<Repo>;
          expect(result.items.length).toBeDefined();
        });
    });

    it('attempt to get repos list with search query', async () => {
      const res = await request(app.getHttpServer())
        .get(`/repo/list?search=test`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);

      const result = res.body as IPaged<Repo>;

      expect(result.items.length).toBeDefined();
    });
  });

  describe(`DELETE /repo/remove`, () => {
    it('attempt to delete repository by owner', async () => {
      const params: DTOReposRemoveRequest = {
        ids: [nonAdminRepo.id],
      };
      const res = await request(app.getHttpServer())
        .del(`/repo/remove`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .send(params)
        .expect(HttpStatus.OK);

      const result = res.body as number[];

      expect(result.length).toBeDefined();
    });
  });
});
