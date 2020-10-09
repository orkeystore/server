import { IsString } from 'class-validator';
import { JWKRSAKey } from 'jose';
import { DTOJWKRSAKeyPublic } from './DTOJWKRSAKeyPublic';

export class DTOJWKRSAKeyPrivate
  extends DTOJWKRSAKeyPublic
  implements JWKRSAKey {
  @IsString()
  d: string;

  @IsString()
  p: string;

  @IsString()
  q: string;

  @IsString()
  dp: string;

  @IsString()
  dq: string;

  @IsString()
  qi: string;
}
