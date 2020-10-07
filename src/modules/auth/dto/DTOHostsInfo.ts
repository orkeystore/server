import { IsString } from 'class-validator';

export class DTOHostsInfo {
  @IsString()
  private?: string;

  @IsString()
  public?: string;
}
