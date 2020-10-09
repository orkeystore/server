import { v4 as uuid } from 'uuid';
import { plainToClass } from 'class-transformer';
import request from 'supertest';
import { HttpStatus, INestApplication } from '@nestjs/common';

import { DTOEntryDetails } from 'src/modules/keys/dto/DTOEntryDetails';
import { DTORepoDetails } from 'src/modules/repos/dto/DTORepoDetails';
import { DTOReposBanchResponse } from 'src/modules/repos/dto/DTOReposBanchResponse';
import { DTOReposCreateRequest } from 'src/modules/repos/dto/DTOReposCreateRequest';
import { DTOReposRemoveRequest } from 'src/modules/repos/dto/DTOReposRemoveRequest';
import { DTODeletedRepos } from 'src/modules/repos/dto/DTODeletedRepos';
import { DTOReposList } from 'src/modules/repos/dto/DTOReposList';
import { createKeysSet, getItemsDTOCreateKey } from './_.data.mock';
import { prepareTestApp, getAdminToken, getSimpleToken } from './prepare';
import { checkServerResponse } from './utils/checkServerResponse';

describe('Repos module', () => {
  let app: INestApplication;
  let adminToken: string;
  let simpleToken: string;
  let nonRotatableNonAdminKeys: DTOEntryDetails[];
  let rotatableAdminKeys: DTOEntryDetails[];

  const createRepo = async (
    keys: DTOReposCreateRequest['keys'],
    opts: { isAdmin?: boolean } = {},
  ): Promise<DTORepoDetails> => {
    let repo: DTORepoDetails;

    const payload: DTOReposCreateRequest = {
      name: 'Test repo',
      description: 'Test repo description',
      code: uuid(),
      accessToken: 'access_code_for_repo',
      keys,
    };

    await request(app.getHttpServer())
      .post('/repo/create')
      .set('Authorization', `Bearer ${opts.isAdmin ? adminToken : simpleToken}`)
      .send(payload)
      .then(checkServerResponse(HttpStatus.CREATED, DTORepoDetails))
      .then((res) => {
        expect(res.status).toBe(HttpStatus.CREATED);
        repo = plainToClass(DTORepoDetails, res.body);
      });

    return repo;
  };

  beforeAll(async () => {
    app = await prepareTestApp();
    await app.init();

    adminToken = await getAdminToken(app);
    const simple = await getSimpleToken(app, adminToken);
    simpleToken = simple.token;

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

  describe('POST /repo/create', () => {
    it('attempt to create repo with non-admin token', async () => {
      const payload: DTOReposCreateRequest = {
        name: 'Test repo',
        description: 'Test repo description',
        code: uuid(),
        accessToken: 'access_code_for_repo',
        keys: nonRotatableNonAdminKeys.map(({ code }) => code),
      };

      await request(app.getHttpServer())
        .post('/repo/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send(payload)
        .then(checkServerResponse(HttpStatus.CREATED, DTORepoDetails));
    });

    it('attempt to create repo with admin token', async () => {
      const payload: DTOReposCreateRequest = {
        name: 'Test admin repo',
        description: 'Test admin repo description',
        code: uuid(),
        accessToken: 'access_code_for_repo',
        keys: rotatableAdminKeys.map(({ code }) => code),
      };

      await request(app.getHttpServer())
        .post('/repo/create')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .then(checkServerResponse(HttpStatus.CREATED, DTORepoDetails));
    });
  });

  describe('POST /repo/bunch/:code', () => {
    it(`attempt to get bunch data from non-admin-repo`, async () => {
      const keys = nonRotatableNonAdminKeys.map(({ code }) => code);
      const nonAdminRepo = await createRepo(keys);

      await request(app.getHttpServer())
        .post(`/repo/bunch/${nonAdminRepo.code}`)
        .send({ accessToken: nonAdminRepo.accessToken })
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOReposBanchResponse));
    });
  });

  describe(`GET /repo/list`, () => {
    it('attempt to get repos list for admin user', async () => {
      await request(app.getHttpServer())
        .get(`/repo/list`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOReposList));
    });

    it('attempt to get repos list with search query', async () => {
      await request(app.getHttpServer())
        .get(`/repo/list?search=test`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOReposList));
    });
  });

  describe(`DELETE /repo/remove`, () => {
    it('attempt to delete repository by owner', async () => {
      const keys = nonRotatableNonAdminKeys.map(({ code }) => code);
      const nonAdminRepo = await createRepo(keys);

      const params: DTOReposRemoveRequest = {
        ids: [nonAdminRepo.id],
      };

      await request(app.getHttpServer())
        .del(`/repo/remove`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .send(params)
        .then(checkServerResponse(HttpStatus.OK, DTODeletedRepos));
    });
  });
});
