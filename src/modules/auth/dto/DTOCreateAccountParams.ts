import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DTOCreateAccountParams {
  @ApiProperty()
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  isAdmin: boolean;
}
