import { Exclude } from 'class-transformer';
import { Entry } from 'src/orm/entities/Entry';
import { Account } from 'src/orm/entities/Account';
import { DTOKeyDetails } from './DTOKeyDetails';

export class DTOEntryDetails extends Entry {
  @Exclude()
  account: Account;

  @Exclude()
  rsakeys?: DTOKeyDetails[];
}
