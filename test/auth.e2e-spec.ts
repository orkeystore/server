import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';

import { DTOCreateAccountParams } from 'src/modules/auth/dto/DTOCreateAccountParams';
import { DTOSessionInfo } from 'src/modules/auth/dto/DTOSessionInfo';
import { prepareTestApp } from './prepare';
import { checkServerResponse } from './utils/checkServerResponse';
import { DTOHttpException } from 'src/modules/errors/dto/DTOHttpException';
import { DTOAccountDetails } from 'src/modules/auth/dto/DTOAccountDetails';
import { DTODeletedAccounts } from 'src/modules/auth/dto/DTODeletedAccounts';

describe('Auth module', () => {
  let app: INestApplication;
  let adminToken: string;
  let simpleToken: string;

  beforeAll(async () => {
    app = await prepareTestApp();
    await app.init();

    const adminTokenRes = await request(app.getHttpServer())
      .post('/auth/token')
      .send({ username: 'admin', password: 'password' })
      .expect(HttpStatus.ACCEPTED);

    adminToken = adminTokenRes.body.token;

    await request(app.getHttpServer())
      .post('/auth/account')
      .send({
        isAdmin: false,
        login: 'simple',
        password: 'password',
      })
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(HttpStatus.CREATED);

    const simpleTokenRes = await request(app.getHttpServer())
      .post('/auth/token')
      .send({ username: 'simple', password: 'password' })
      .expect(HttpStatus.ACCEPTED);

    simpleToken = simpleTokenRes.body.token;
  });

  describe('POST /auth/token', () => {
    it('attempt with wrong user', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'notAdmin', password: 'password' })
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt with wrong password', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin', password: 'wrong' })
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt without password', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin' })
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt without user', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ password: 'admin' })
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt with correct credentials', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin', password: 'password' })
        .then(checkServerResponse(HttpStatus.ACCEPTED, DTOSessionInfo));
    });
  });

  describe('POST /auth/account', () => {
    const fakeAccount: DTOCreateAccountParams = {
      isAdmin: false,
      login: 'fakeUser',
      password: 'fakePassword',
    };

    it('attempt to create account as admin', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send(fakeAccount)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.CREATED, DTOAccountDetails));
    });

    it('attempt to create user with same login', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send(fakeAccount)
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });

    it('attempt to create user without password', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'fakeUser' })
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });

    it('attempt to create user without admin privilege', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'someUser' })
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });
  });

  describe('GET /auth/me', () => {
    it('attempt without token', async () => {
      await request(app.getHttpServer())
        .get('/auth/me')
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt with wrong token', async () => {
      await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer wrongTokenString`)
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });

    it('attempt with correct token', async () => {
      await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOSessionInfo));
    });
  });

  describe('GET /auth/accounts', () => {
    it('attempt to get accounts list with admin role', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTOAccountDetails));
    });

    it('attempt to get accounst list without admin role', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it('attempt to get accounst list without token', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .then(checkServerResponse(HttpStatus.UNAUTHORIZED, DTOHttpException));
    });
  });

  describe('DELETE /auth/accounts', () => {
    it('attempt to delete accounts without admin privilege', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [1] })
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.FORBIDDEN, DTOHttpException));
    });

    it('attempt to delete not existed accounts', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [2, 10] })
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.NOT_FOUND, DTOHttpException));
    });

    it('attempt to delete initial account', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [1] })
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });

    it('attempt to delete existed accounts with admin privilege', async () => {
      const userRes = await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'userToDelete', password: 'password' })
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.CREATED, DTOAccountDetails));

      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [userRes.body.id] })
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTODeletedAccounts));
    });
  });

  describe('DELETE /auth/me', () => {
    it('attempt to delete self', async () => {
      await request(app.getHttpServer())
        .delete('/auth/me')
        .set('Authorization', `Bearer ${simpleToken}`)
        .then(checkServerResponse(HttpStatus.OK, DTODeletedAccounts));
    });

    it('attempt to delete initial user', async () => {
      await request(app.getHttpServer())
        .delete('/auth/me')
        .set('Authorization', `Bearer ${adminToken}`)
        .then(checkServerResponse(HttpStatus.BAD_REQUEST, DTOHttpException));
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
