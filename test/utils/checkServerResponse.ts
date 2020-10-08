import { Response } from 'supertest';
import { plainToClass } from 'class-transformer';
import { validate, ValidatorOptions } from 'class-validator';
import { UtilsService } from 'src/modules/utils/utils.service';

export const checkServerResponse = <T>(
  status: number,
  DTO: new () => T,
  validatorOptions?: ValidatorOptions,
) => async (res: Response): Promise<Response> => {
  expect(res.status).toBe(status);
  const result = plainToClass(DTO, res.body);
  let targets: T[] = [];
  if ((result as any).length === undefined) {
    targets = [result];
  } else {
    targets = (result as unknown) as T[];
  }

  const errorsArray = await Promise.all(
    targets.map((target) => {
      return validate(target, {
        whitelist: true,
        forbidNonWhitelisted: true,
        ...validatorOptions,
      });
    }),
  ).catch((err) => {
    throw err;
  });

  let errors: string[] = [];
  const errorsCount = errorsArray.reduce((total, i) => total + i.length, 0);

  if (errorsCount > 0) {
    // convert to readable stringds
    errors = errorsArray
      .map(UtilsService.mapValidationErrorsToArray)
      .reduce(
        (res, i) => res.concat(i.length > 0 ? i.concat(['\n']) : ['\n']),
        [],
      );
  }

  const customMessage = `DTO errors:\n\t${errors.join('\n\t')}`;

  expect(errorsCount, customMessage).toBe(0);

  return res;
};
