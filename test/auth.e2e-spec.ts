import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';

import { DTOCreateAccountParams } from 'src/modules/auth/dto/DTOCreateAccountParams';
import { UtilsService } from 'src/modules/utils/utils.service';
import { DTOSessionInfo } from 'src/modules/auth/dto/DTOSessionInfo';
import { prepareTestApp } from './prepare';

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
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('attempt with wrong password', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin', password: 'wrong' })
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('attempt without password', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin' })
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('attempt without user', async () => {
      await request(app.getHttpServer())
        .post('/auth/token')
        .send({ password: 'admin' })
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('attempt with correct credentials', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/token')
        .send({ username: 'admin', password: 'password' })
        .expect(HttpStatus.ACCEPTED);

      const errors = await UtilsService.validateDataByDTO(
        res.body,
        DTOSessionInfo,
      );

      expect(errors.length).toBe(0);
    });
  });

  describe('POST /auth/account', () => {
    const fakeAccount: DTOCreateAccountParams = {
      isAdmin: false,
      login: 'fakeUser',
      password: 'fakePassword',
    };

    it('attempt to create account as admin', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/account')
        .send(fakeAccount)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.CREATED);

      expect(res.body).toMatchObject({
        isAdmin: false,
        login: fakeAccount.login,
      });
      expect(res.body.id).not.toBeNaN();
    });

    it('attempt to create user with same login', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send(fakeAccount)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('attempt to create user without password', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'fakeUser' })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('attempt to create user without admin privilege', async () => {
      await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'someUser' })
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('GET /auth/me', () => {
    it('attempt without token', async () => {
      const res = await request(app.getHttpServer())
        .get('/auth/me')
        .expect(HttpStatus.UNAUTHORIZED);

      expect(res.body).toMatchObject({
        statusCode: 401,
        message: 'Unauthorized',
      });
    });

    it('attempt with wrong token', async () => {
      const res = await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer wrongTokenString`)
        .expect(HttpStatus.UNAUTHORIZED);

      expect(res.body).toMatchObject({
        statusCode: 401,
        message: 'Unauthorized',
      });
    });

    it('attempt with correct token', async () => {
      const res = await request(app.getHttpServer())
        .get('/auth/me')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);

      const errors = await UtilsService.validateDataByDTO(
        res.body,
        DTOSessionInfo,
      );

      expect(errors.length).toBe(0);
    });
  });

  describe('GET /auth/accounts', () => {
    it('attempt to get accounst list with admin role', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });

    it('attempt to get accounst list without admin role', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('attempt to get accounst list without token', async () => {
      await request(app.getHttpServer())
        .get('/auth/accounts')
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });

  describe('DELETE /auth/accounts', () => {
    it('attempt to delete accounts without admin privilege', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [1] })
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('attempt to delete not existed accounts', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [2, 10] })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });

    it('attempt to delete initial account', async () => {
      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [1] })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('attempt to delete existed accounts with admin privilege', async () => {
      const userRes = await request(app.getHttpServer())
        .post('/auth/account')
        .send({ isAdmin: false, login: 'userToDelete', password: 'password' })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .delete('/auth/accounts')
        .send({ ids: [userRes.body.id] })
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });
  });

  describe('DELETE /auth/me', () => {
    it('attempt to delete self', async () => {
      await request(app.getHttpServer())
        .delete('/auth/me')
        .set('Authorization', `Bearer ${simpleToken}`)
        .expect(HttpStatus.OK);
    });

    it('attempt to delete initial user', async () => {
      await request(app.getHttpServer())
        .delete('/auth/me')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
