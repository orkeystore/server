import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { DTOAccountDetails } from './DTOAccountDetails';
import { DTOHostsInfo } from './DTOHostsInfo';

export class DTOSessionInfo {
  @IsString()
  @IsNotEmpty()
  token: string;

  @Type(() => DTOHostsInfo)
  @ValidateNested()
  hosts: DTOHostsInfo;

  @Type(() => DTOAccountDetails)
  @ValidateNested()
  account: DTOAccountDetails;
}
