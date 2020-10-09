import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { DTOKeyFormatsPrivate, DTOKeyFormatsPublic } from './DTOKeyFormats';

export class DTOAllKeysFormats {
  @Type(() => DTOKeyFormatsPublic)
  @ValidateNested()
  publicKey: DTOKeyFormatsPublic;

  @Type(() => DTOKeyFormatsPrivate)
  @ValidateNested()
  @IsOptional()
  privateKey?: DTOKeyFormatsPrivate;

  @IsNumber()
  activatesAt: number;

  @IsOptional()
  @IsNumber()
  expiresAt: number;

  @IsNumber()
  entryId: number;
}
