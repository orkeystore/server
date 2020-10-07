import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DTOReposBanchRequest {
  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;
}
