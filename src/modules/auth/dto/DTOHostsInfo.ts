import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DTOHostsInfo {
  @ApiPropertyOptional({ example: 'http://hostname' })
  @IsString()
  private?: string;

  @ApiPropertyOptional({ example: 'http://hostname' })
  @IsString()
  public?: string;
}
