import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DTORepoBanchEntry } from './DTORepoBanchEntry';

export class DTOReposBanchResponse {
  @IsArray()
  @Type(() => DTORepoBanchEntry)
  @ValidateNested()
  entries: DTORepoBanchEntry[];
}
