import { Exclude } from 'class-transformer';
import { Entry } from 'src/orm/entities/Entry';
import { RSAKey } from 'src/orm/entities/RSAKey';

export class DTOKeyDetails extends RSAKey {
  @Exclude()
  entry: Entry;
}
