import { IsString } from 'class-validator';
import { DTOAllKeysFormats } from 'src/modules/keys/dto/DTOAllKeysFromats';

export class DTORepoBanchEntry extends DTOAllKeysFormats {
  @IsString()
  accessToken: string;
}
