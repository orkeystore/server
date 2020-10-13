import { Exclude, Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DTOEntryDetails } from 'src/modules/keys/dto/DTOEntryDetails';
import { Account } from 'src/orm/entities/Account';
import { Repo } from 'src/orm/entities/Repo';

export class DTORepoDetails extends Repo {
  @Type(() => DTOEntryDetails)
  @IsArray()
  @ValidateNested()
  entries: DTOEntryDetails[];

  @Exclude()
  account: Account;
}
