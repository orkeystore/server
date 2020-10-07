import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ParseOptionalInt implements PipeTransform {
  transform(value: string | undefined, _metadata: ArgumentMetadata): number {
    if (value !== undefined) {
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue)) {
        throw new HttpException(
          'Validation failed (numeric string is expected)',
          HttpStatus.BAD_REQUEST,
        );
      }
      return parsedValue;
    }
  }
}
