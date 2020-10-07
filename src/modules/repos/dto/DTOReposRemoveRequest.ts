import { ApiProperty } from '@nestjs/swagger';

export class DTOReposRemoveRequest {
  @ApiProperty()
  ids: number[];
}
