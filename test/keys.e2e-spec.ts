import { HttpStatus, INestApplication } from '@nestjs/common';
import {
  IAllKeyFormats,
  IParsedKey,
} from 'src/modules/keys/services/keys.service';
import { Entry } from 'src/orm/entities/Entry';
import { IPaged } from 'src/types';
import request from 'supertest';
import { v4 as uuid } from 'uuid';

import { getAdminToken, getSimpleToken, prepareTestApp } from './prepare';

describe('Keys module', () => {
  let simpleAccountId: number;
  let app: INestApplication;
  let adminToken: string;
  let simpleToken: string;
  let adminRotatableEntry: Omit<Entry, 'account'>;
  let nonRotatableNonAdminEntry: Omit<Entry, 'account'>;
  let keyId: string;

  beforeAll(async () => {
    app = await prepareTestApp();
    await app.init();

    adminToken = await getAdminToken(app);
    const simple = await getSimpleToken(app, adminToken);
    simpleToken = simple.token;
    simpleAccountId = simple.accountId;
  });

  describe('POST /entry/create', () => {
    it('attempt to create new valid entry with admin privilege', async () => {
      const res = await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'Test entry',
          code: 'rotatableEntry',
          accessToken: 'some_secret_code',
          rotation: '10 days',
        })
        .expect(HttpStatus.CREATED);

      adminRotatableEntry = res.body;
    });

    it('attempt to create new valid entry without admin privilege', async () => {
      const res = await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: 'notRotatableEntry',
          accessToken: 'some_secret_code',
        })
        .expect(HttpStatus.CREATED);

      nonRotatableNonAdminEntry = res.body;
    });

    it('attempt to create new entry with invalid format', async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          code: uuid(),
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('attempt to create new entry with same code', async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: 'rotatableEntry',
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  describe('POST /entry/archive/:id', () => {
    it(`attempt to archive entry`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/archive/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.ACCEPTED);
    });
  });

  describe('POST /entry/restore/:id', () => {
    it(`attempt to restore entry from another user`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it(`attempt to restore not existed entry`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/100`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });

    it(`attempt to restore archived entry`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.ACCEPTED);
    });
  });

  describe('GET /entry/byIds', () => {
    it('attempt to get entries list by ids', async () => {
      const res = await request(app.getHttpServer())
        .get(`/entry/byIds?ids=${adminRotatableEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);

      const { items } = res.body as { items: Entry[] };
      expect(items.length).toBe(1);
    });
  });

  describe('GET /entry/list', () => {
    it('attempt to get entries list', async () => {
      const res = await request(app.getHttpServer())
        .get(`/entry/list`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);

      const { items } = res.body as IPaged<Entry>;

      expect(items.length).toBeGreaterThan(0);

      items.forEach((item) => {
        expect(item.accountId).toBe(simpleAccountId);
      });
    });

    it('attempt to get entries list with pager', async () => {
      const res = await request(app.getHttpServer())
        .get(`/entry/list?page=1&perPage=15`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);

      const { items } = res.body as IPaged<Entry>;

      expect(items.length).toBeGreaterThan(0);

      items.forEach((item) => {
        expect(item.accountId).toBe(simpleAccountId);
      });
    });

    it('attempt to get entries list with wrong pager', async () => {
      await request(app.getHttpServer())
        .get(`/entry/list?page=1&perPage=k`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  describe('GET /entry/public/{jwk,jwks,pem}/:keyCode', () => {
    it('GET /public/jwk/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/jwk/${adminRotatableEntry.code}`)
        .expect(HttpStatus.OK);
    });
    it('GET /public/jwks/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/jwks/${nonRotatableNonAdminEntry.code}`)
        .expect(HttpStatus.OK);
    });
    it('GET /public/pem/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/pem/${adminRotatableEntry.code}`)
        .expect(HttpStatus.OK);
    });
  });

  describe('POST /entry/private/{jwk,jwks,pem}/:keyCode', () => {
    it('POST /private/jwk/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/jwk/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .expect(HttpStatus.ACCEPTED);
    });
    it('POST /private/jwks/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/jwks/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .expect(HttpStatus.ACCEPTED);
    });
    it('POST /private/pem/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .expect(HttpStatus.ACCEPTED);
    });
    it('POST /private/pem/:id (wrong user access check)', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${adminRotatableEntry.code}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('POST /private/pem/:id (correct user access check)', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${adminRotatableEntry.code}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.ACCEPTED);
    });
  });

  describe('GET /key/byEntry/:entryId', () => {
    it('attemt to get key details by entry id', async () => {
      await request(app.getHttpServer())
        .get(`/key/byEntry/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);
    });

    it('attemt to get key details by non-existed entry', async () => {
      await request(app.getHttpServer())
        .get(`/key/byEntry/10`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });
  });

  describe('GET /key/storage', () => {
    it('attempt to get entries storage as  non-admin user', async () => {
      await request(app.getHttpServer())
        .get(`/key/storage`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then((res) => {
          expect(res.status).toBe(HttpStatus.OK);
          const { items } = res.body as IPaged<IParsedKey>;
          keyId = items[0].key.kid;
          expect(items.length).toBeDefined();
        });
    });

    it('attempt to get entries storage with search query', async () => {
      await request(app.getHttpServer())
        .get(`/key/storage?search=test`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);
    });
  });

  describe('GET /key/:keyId', () => {
    it('attempt to get key details by id', async () => {
      const res = await request(app.getHttpServer())
        .get(`/key/${keyId}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);

      const { entryId } = res.body as IAllKeyFormats;

      expect(entryId).toBeDefined();
    });
  });

  describe('DELETE /entry/:id', () => {
    it('attempt to delete entry belong to another user as admin', async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('attempt to delete entry belong to another user as non-admin', async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${adminRotatableEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it(`attempt to delete non-admin user's entry`, async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);
    });

    it(`attempt to delete admin user's entry`, async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${adminRotatableEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });
  });
});
