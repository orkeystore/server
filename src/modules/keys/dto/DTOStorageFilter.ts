import { ApiProperty } from '@nestjs/swagger';

export class DTOStorageFilter {
  @ApiProperty()
  entryName: string;
}
