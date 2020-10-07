import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';

export class DTODeleteAccount {
  @ApiProperty()
  @IsArray()
  @IsInt({ each: true })
  ids: number[];
}
