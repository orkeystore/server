import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DTOHttpException {
  @ApiProperty({ example: 500 })
  @IsNumber()
  statusCode: number;

  @ApiProperty({ example: 'Error description' })
  @IsString()
  message: string;

  @ApiPropertyOptional({ example: 'Optional error details' })
  @IsString()
  @IsOptional()
  error?: string;

  @ApiPropertyOptional({ example: ['Optional error details'] })
  @IsOptional()
  errors?: string[];
}
