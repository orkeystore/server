import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DTOJWKRSAKeyPublic } from './DTOJWKRSAKeyPublic';

export class DTOJWKSPublic {
  @Type(() => DTOJWKRSAKeyPublic)
  @IsArray()
  @ValidateNested()
  keys: DTOJWKRSAKeyPublic[];
}
