import { ApiPropertyOptional } from '@nestjs/swagger';

export class DTOQueryKeysStorage {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  perPage?: number;

  @ApiPropertyOptional()
  search?: string;
}
