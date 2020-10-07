import { ApiPropertyOptional } from '@nestjs/swagger';

export class DTOQueryReposList {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  perPage?: number;

  @ApiPropertyOptional()
  search?: string;
}
