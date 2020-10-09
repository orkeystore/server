import { IsNumber } from 'class-validator';

export class DTODeletedRepos {
  @IsNumber({ allowInfinity: false }, { each: true })
  ids: number[];
}
