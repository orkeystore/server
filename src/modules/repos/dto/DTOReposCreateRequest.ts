import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DTOReposCreateRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty()
  keys: string[];
}
