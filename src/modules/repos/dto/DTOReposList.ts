import { Type } from 'class-transformer';
import { IsArray, IsInstance, ValidateNested } from 'class-validator';
import { DTOPager } from 'src/modules/utils/dto/DTOPager';
import { DTORepoDetails } from './DTORepoDetails';

export class DTOReposList {
  @Type(() => DTORepoDetails)
  @ValidateNested()
  @IsArray()
  items: DTORepoDetails[];

  @Type(() => DTOPager)
  @ValidateNested()
  @IsInstance(DTOPager)
  pager: DTOPager;
}
