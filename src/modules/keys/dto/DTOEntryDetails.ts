import { Exclude, Type } from 'class-transformer';
import { Entry } from 'src/orm/entities/Entry';
import { DTOKeyDetails } from './DTOKeyDetails';

export class DTOEntryDetails extends Entry {
  @Exclude()
  account: any;

  @Type(() => DTOKeyDetails)
  rsakeys?: DTOKeyDetails[];
}
