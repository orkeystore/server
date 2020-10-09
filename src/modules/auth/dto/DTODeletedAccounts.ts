import { IsNumber } from 'class-validator';

export class DTODeletedAccounts {
  @IsNumber({ allowNaN: false, allowInfinity: false }, { each: true })
  ids: number[];
}
