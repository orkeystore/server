import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { Entry } from 'src/orm/entities/Entry';

export class DTOAccountDetails {
  @IsInt()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  login: string;

  @IsBoolean()
  @ApiProperty()
  isAdmin: boolean;

  @Exclude()
  password?: string;

  @Exclude()
  entries?: Entry[];
}
