import { Exclude } from 'class-transformer';
import { RSAKey } from 'src/orm/entities/RSAKey';

export class DTOKeyDetails extends RSAKey {
  @Exclude()
  entry: any;
}
