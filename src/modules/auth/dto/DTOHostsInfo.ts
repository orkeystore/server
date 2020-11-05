import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DTOHostsInfo {
  @ApiPropertyOptional({ example: 'http://hostname' })
  @IsString()
  @IsOptional()
  private?: string;

  @ApiPropertyOptional({ example: 'http://hostname' })
  @IsString()
  @IsOptional()
  public?: string;
}
