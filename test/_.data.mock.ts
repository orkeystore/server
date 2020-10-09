import request from 'supertest';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { DTOCreateKey } from 'src/modules/keys/dto/DTOCreateKey';
import { v4 as uuid } from 'uuid';
import { DTOEntryDetails } from 'src/modules/keys/dto/DTOEntryDetails';
import { plainToClass } from 'class-transformer';

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
): Promise<DTOEntryDetails[]> => {
  return Promise.all(
    items.map(async (item) => {
      const res = await request(app.getHttpServer())
        .post('/entry/create')
        .set('Authorization', `Bearer ${token}`)
        .send(item)
        .expect(HttpStatus.CREATED);

      return plainToClass(DTOEntryDetails, res.body);
    }),
  );
};
