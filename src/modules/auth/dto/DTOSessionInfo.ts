import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { DTOAccountDetails } from './DTOAccountDetails';
import { DTOHostsInfo } from './DTOHostsInfo';

export class DTOSessionInfo {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty()
  @Type(() => DTOHostsInfo)
  @ValidateNested()
  hosts: DTOHostsInfo;

  @ApiProperty()
  @Type(() => DTOAccountDetails)
  @ValidateNested()
  account: DTOAccountDetails;
}
