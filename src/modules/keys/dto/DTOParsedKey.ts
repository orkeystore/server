import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Entry } from 'src/orm/entities/Entry';
import { DTOJWKRSAKeyPublic } from './DTOJWKRSAKeyPublic';

export class DTOParsedKey {
  @Type(() => DTOJWKRSAKeyPublic)
  @ValidateNested()
  key: DTOJWKRSAKeyPublic;

  @IsOptional()
  @IsString()
  expires: string;

  @IsOptional()
  @IsNumber()
  expUnix: number;

  @IsNumber()
  activateUnix: number;

  @Type(() => Entry)
  @ValidateNested()
  @IsOptional()
  entry?: Entry;
}
