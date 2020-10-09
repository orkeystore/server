import { HttpStatus, INestApplication } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JWK } from 'jose';
import request from 'supertest';
import { v4 as uuid } from 'uuid';

import { DTOHttpException } from 'src/modules/errors/dto/DTOHttpException';
import { DTOAllKeysFormats } from 'src/modules/keys/dto/DTOAllKeysFromats';
import { DTOEntriesByIds } from 'src/modules/keys/dto/DTOEntriesByIds';
import { DTOEntriesList } from 'src/modules/keys/dto/DTOEntriesList';
import { DTOEntryDetails } from 'src/modules/keys/dto/DTOEntryDetails';
import { DTOJWKRSAKeyPrivate } from 'src/modules/keys/dto/DTOJWKRSAKeyPrivate';
import { DTOJWKRSAKeyPublic } from 'src/modules/keys/dto/DTOJWKRSAKeyPublic';
import { DTOJWKSPrivate } from 'src/modules/keys/dto/DTOJWKSPrivate';
import { DTOJWKSPublic } from 'src/modules/keys/dto/DTOJWKSPublic';
import { DTOStorageItems } from 'src/modules/keys/dto/DTOStorageItems';

import { getAdminToken, getSimpleToken, prepareTestApp } from './prepare';
import { checkServerResponse } from './utils/checkServerResponse';

describe('Keys module', () => {
  let simpleAccountId: number;
  let app: INestApplication;
  let adminToken: string;
  let simpleToken: string;
  let adminRotatableEntry: DTOEntryDetails;
  let nonRotatableNonAdminEntry: DTOEntryDetails;

  beforeAll(async () => {
    app = await prepareTestApp();
    await app.init();

    adminToken = await getAdminToken(app);
    const simple = await getSimpleToken(app, adminToken);
    simpleToken = simple.token;
    simpleAccountId = simple.accountId;

    const res = await request(app.getHttpServer())
      .post('/entry/create')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Test entry',
        code: 'rotatableEntry',
        accessToken: 'some_secret_code',
        rotation: '10 days',
      })
      .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));

    adminRotatableEntry = res.body;

    const nonRotatableRes = await request(app.getHttpServer())
      .post('/entry/create')
      .set('Authorization', `Bearer ${simpleToken}`)
      .send({
        name: 'Test entry',
        code: 'notRotatableEntry',
        accessToken: 'some_secret_code',
      })
      .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));

    nonRotatableNonAdminEntry = nonRotatableRes.body;
  });

  describe('POST /entry/create', () => {
    it('attempt to create new valid entry with admin privilege', async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
          rotation: '10 days',
        })
        .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));
    });

    it('attempt to create new valid entry without admin privilege', async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
        })
        .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));
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
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });

    it('attempt to create new entry with same code', async () => {
      const code = uuid();
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code,
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));

      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code,
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });
  });

  describe('POST /entry/archive/:id', () => {
    it(`attempt to archive entry`, async () => {
      const res = await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .then(checkServerResponse(HttpStatus.CREATED, DTOEntryDetails));

      const targetId = (res.body as DTOEntryDetails).id;

      await request(app.getHttpServer())
        .post(`/entry/archive/${targetId}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOEntryDetails));
    });
  });

  describe('POST /entry/restore/:id', () => {
    let targetId: number;

    beforeEach(async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
          rotationPeriod: '10 days',
        })
        .then((res) => {
          expect(res.status).toBe(HttpStatus.CREATED);
          targetId = (res.body as DTOEntryDetails).id;
        });

      await request(app.getHttpServer())
        .post(`/entry/archive/${targetId}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then((res) => expect(res.status).toBe(HttpStatus.ACCEPTED));
    });

    it(`attempt to restore entry from another user`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/${targetId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it(`attempt to restore not existed entry`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/100`)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.NOT_FOUND, DTOHttpException));
    });

    it(`attempt to restore archived entry`, async () => {
      await request(app.getHttpServer())
        .post(`/entry/restore/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOEntryDetails));
    });
  });

  describe('GET /entry/byIds', () => {
    it('attempt to get entries list by ids', async () => {
      await request(app.getHttpServer())
        .get(`/entry/byIds?ids=${adminRotatableEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOEntriesByIds));
    });
  });

  describe('GET /entry/list', () => {
    const checkUserId = (items: DTOEntryDetails[], id: number) => {
      return items.every(({ accountId }) => accountId === id);
    };

    it('attempt to get entries list', async () => {
      await request(app.getHttpServer())
        .get(`/entry/list`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOEntriesList))
        .then((res) => {
          const { items } = plainToClass(DTOEntriesList, res.body);
          expect(checkUserId(items, simpleAccountId)).toBeTruthy();
        });
    });

    it('attempt to get entries list with pager', async () => {
      await request(app.getHttpServer())
        .get(`/entry/list?page=1&perPage=15`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOEntriesList))
        .then((res) => {
          const { items } = plainToClass(DTOEntriesList, res.body);
          expect(checkUserId(items, simpleAccountId)).toBeTruthy();
        });
    });

    it('attempt to get entries list with wrong pager', async () => {
      await request(app.getHttpServer())
        .get(`/entry/list?page=1&perPage=k`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });
  });

  describe('GET /entry/public/{jwk,jwks,pem}/:keyCode', () => {
    it('GET /public/jwk/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/jwk/${adminRotatableEntry.code}`)
        .then(checkServerResponse(HttpStatus.OK, DTOJWKRSAKeyPublic));
    });
    it('GET /public/jwks/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/jwks/${nonRotatableNonAdminEntry.code}`)
        .then(checkServerResponse(HttpStatus.OK, DTOJWKSPublic));
    });
    it('GET /public/pem/:id', async () => {
      await request(app.getHttpServer())
        .get(`/entry/public/pem/${adminRotatableEntry.code}`)
        .expect(HttpStatus.OK)
        .then((res) => {
          let key: JWK.RSAKey;
          expect(() => {
            key = JWK.asKey(res.text) as JWK.RSAKey;
          }).not.toThrow();
          expect(key.public).toBe(true);
        });
    });
  });

  describe('POST /entry/private/{jwk,jwks,pem}/:keyCode', () => {
    it('POST /private/jwk/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/jwk/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOJWKRSAKeyPrivate));
    });
    it('POST /private/jwks/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/jwks/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOJWKSPrivate));
    });
    it('POST /private/pem/:id', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${nonRotatableNonAdminEntry.code}`)
        .send({ accessToken: nonRotatableNonAdminEntry.accessCode })
        .then((res) => {
          let key: JWK.RSAKey;
          expect(() => {
            key = JWK.asKey(res.text) as JWK.RSAKey;
          }).not.toThrow();
          expect(key.private).toBe(true);
        });
    });
    it('POST /private/pem/:id (wrong user access check)', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${adminRotatableEntry.code}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it('POST /private/pem/:id (correct user access check)', async () => {
      await request(app.getHttpServer())
        .post(`/entry/private/pem/${adminRotatableEntry.code}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.ACCEPTED)
        .then((res) => {
          let key: JWK.RSAKey;
          expect(() => {
            key = JWK.asKey(res.text) as JWK.RSAKey;
          }).not.toThrow();
          expect(key.private).toBe(true);
        });
    });
  });

  describe('GET /key/byEntry/:entryId', () => {
    it('attemt to get key details by entry id', async () => {
      await request(app.getHttpServer())
        .get(`/key/byEntry/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOAllKeysFormats));
    });

    it('attemt to get key details by non-existed entry', async () => {
      await request(app.getHttpServer())
        .get(`/key/byEntry/10000`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.NOT_FOUND, DTOHttpException));
    });
  });

  describe('GET /key/storage', () => {
    it('attempt to get entries storage as  non-admin user', async () => {
      await request(app.getHttpServer())
        .get(`/key/storage`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOStorageItems));
    });

    it('attempt to get entries storage with search query', async () => {
      await request(app.getHttpServer())
        .get(`/key/storage?search=test`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOStorageItems));
    });
  });

  describe('GET /key/:keyId', () => {
    let nonAdminEntry: DTOEntryDetails;
    let keyId: string;

    beforeAll(async () => {
      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
        })
        .then((res) => {
          expect(res.status).toBe(HttpStatus.CREATED);
          nonAdminEntry = plainToClass(DTOEntryDetails, res.body);
        });

      await request(app.getHttpServer())
        .get(`/key/byEntry/${nonAdminEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then((res) => {
          expect(res.status).toBe(HttpStatus.OK);
          keyId = plainToClass(DTOAllKeysFormats, res.body).publicKey.jwk.kid;
        });
    });

    it('attempt to get key details by id', async () => {
      await request(app.getHttpServer())
        .get(`/key/${keyId}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOAllKeysFormats));
    });
  });

  describe('DELETE /entry/:id', () => {
    it('attempt to delete entry belong to another user as admin', async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${nonRotatableNonAdminEntry.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it('attempt to delete entry belong to another user as non-admin', async () => {
      await request(app.getHttpServer())
        .delete(`/entry/${adminRotatableEntry.id}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it(`attempt to delete non-admin user's entry`, async () => {
      let entryId: number;

      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${simpleToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
        })
        .then((res) => {
          expect(res.status).toBe(HttpStatus.CREATED);
          entryId = plainToClass(DTOEntryDetails, res.body).id;
        });

      await request(app.getHttpServer())
        .delete(`/entry/${entryId}`)
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);
    });

    it(`attempt to delete admin user's entry`, async () => {
      let entryId: number;

      await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'Test entry',
          code: uuid(),
          accessToken: 'some_secret_code',
        })
        .then((res) => {
          expect(res.status).toBe(HttpStatus.CREATED);
          entryId = plainToClass(DTOEntryDetails, res.body).id;
        });

      await request(app.getHttpServer())
        .delete(`/entry/${entryId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });
  });
});
