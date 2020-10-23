import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DTOAuthUser {
  @ApiProperty({ example: 'admin' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  password: string;
}
