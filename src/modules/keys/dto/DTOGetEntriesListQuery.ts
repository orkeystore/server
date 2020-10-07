import { ApiProperty } from '@nestjs/swagger';

export class DTOGetEntriesListQuery {
  @ApiProperty({ default: 1, required: false })
  page?: number;

  @ApiProperty({ default: 20, required: false })
  perPage?: number;
}
