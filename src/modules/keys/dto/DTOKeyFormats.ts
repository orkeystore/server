import { Type } from 'class-transformer';
import { IsInstance, IsString, ValidateNested } from 'class-validator';
import { DTOJWKRSAKeyPrivate } from './DTOJWKRSAKeyPrivate';
import { DTOJWKRSAKeyPublic } from './DTOJWKRSAKeyPublic';

export class DTOKeyFormatsPublic {
  @Type(() => DTOJWKRSAKeyPublic)
  @IsInstance(DTOJWKRSAKeyPublic)
  @ValidateNested()
  jwk: DTOJWKRSAKeyPublic;

  @IsString()
  pem: string;
}

export class DTOKeyFormatsPrivate {
  @Type(() => DTOJWKRSAKeyPrivate)
  @IsInstance(DTOJWKRSAKeyPrivate)
  @ValidateNested()
  jwk: DTOJWKRSAKeyPrivate;

  @IsString()
  pem: string;
}
