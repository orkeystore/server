import request from 'supertest';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { DTOCreateKey } from 'src/modules/keys/dto/DTOCreateKey';
import { Entry } from 'src/orm/entities/Entry';
import { v4 as uuid } from 'uuid';

export const getItemsDTOCreateKey = (
  qtty = 1,
  rotation?: string,
): DTOCreateKey[] => {
  const result: DTOCreateKey[] = [];
  let i = 1;
  while (i <= qtty) {
    result.push({
      name: `Test entry ${i}`,
      description: `Optional test description ${i}`,
      code: `test_unique_code_${i}_${uuid()}`,
      accessToken: `test_access_code_${i}`,
      rotation,
    });
    ++i;
  }
  return result;
};

export const createKeysSet = async (
  app: INestApplication,
  items: DTOCreateKey[],
  token: string,
): Promise<Omit<Entry, 'account'>[]> => {
  return Promise.all(
    items.map(async (item) => {
      const res = await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${token}`)
        .send(item)
        .expect(HttpStatus.CREATED);

      return res.body as Omit<Entry, 'account'>;
    }),
  );
};
