import { Type } from 'class-transformer';
import { IsArray, IsInstance, ValidateNested } from 'class-validator';
import { DTOPager } from 'src/modules/utils/dto/DTOPager';
import { DTOEntryDetails } from './DTOEntryDetails';

export class DTOEntriesList {
  @Type(() => DTOEntryDetails)
  @ValidateNested()
  @IsArray()
  items: DTOEntryDetails[];

  @Type(() => DTOPager)
  @ValidateNested()
  @IsInstance(DTOPager)
  pager: DTOPager[];
}
