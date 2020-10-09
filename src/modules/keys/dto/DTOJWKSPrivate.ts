import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DTOJWKRSAKeyPrivate } from './DTOJWKRSAKeyPrivate';

export class DTOJWKSPrivate {
  @Type(() => DTOJWKRSAKeyPrivate)
  @IsArray()
  @ValidateNested()
  keys: DTOJWKRSAKeyPrivate[];
}
