import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class DTOHttpUnauthorizedException {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  @IsNumber()
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized request' })
  @IsString()
  message: string;
}
