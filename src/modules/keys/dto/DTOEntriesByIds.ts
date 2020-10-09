import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DTOEntryDetails } from './DTOEntryDetails';

export class DTOEntriesByIds {
  @Type(() => DTOEntryDetails)
  @ValidateNested()
  @IsArray()
  items: DTOEntryDetails[];
}
