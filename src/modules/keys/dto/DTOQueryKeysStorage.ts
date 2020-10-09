import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class DTOQueryKeysStorage {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  perPage?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;
}
