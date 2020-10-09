import { Exclude } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class DTOPager {
  @IsNumber()
  page: number;

  @IsNumber()
  perPage: number;

  @IsNumber()
  totalPages: number;

  @IsNumber()
  totalItems: number;

  @Exclude()
  skip: number;

  @Exclude()
  take: number;
}
