import { IsIn, IsString } from 'class-validator';
import { JWKRSAKey } from 'jose';

export class DTOJWKRSAKeyPublic implements JWKRSAKey {
  @IsIn(['RSA'])
  kty: 'RSA';

  @IsString()
  alg: string;

  @IsString()
  kid: string;

  @IsString()
  e: string;

  @IsString()
  n: string;
}
