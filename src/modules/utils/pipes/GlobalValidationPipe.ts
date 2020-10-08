import {
  HttpException,
  HttpStatus,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { UtilsService } from '../utils.service';

export class GlobalValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (errors) => {
        return new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Bad request',
            errors: UtilsService.mapValidationErrorsToArray(errors),
          },
          HttpStatus.BAD_REQUEST,
        );
      },
      ...options,
    });
  }
}
