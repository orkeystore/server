import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { DTOPager } from 'src/modules/utils/dto/DTOPager';
import { DTOParsedKey } from './DTOParsedKey';

export class DTOStorageItems {
  @Type(() => DTOParsedKey)
  @ValidateNested()
  items: DTOParsedKey[];

  @Type(() => DTOPager)
  @ValidateNested()
  pager: DTOPager;
}
