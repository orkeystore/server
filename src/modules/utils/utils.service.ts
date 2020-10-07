import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { IPagerParams } from 'src/types';

@Injectable()
export class UtilsService {
  private defaultPager: IPagerParams;

  constructor(private readonly configService: ConfigService) {
    this.defaultPager = this.configService.get<IPagerParams>('defaultPager');
  }

  getOrmPagination(
    count: number,
    pagination?: Partial<IPagerParams>,
  ): Required<IPagerParams> {
    return UtilsService.getOrmPagination(count, this.defaultPager, pagination);
  }

  getPaginationTotal(
    total: number,
    perPage: number,
  ): Pick<IPagerParams, 'totalItems' | 'totalPages'> {
    return {
      totalItems: total,
      totalPages: Math.ceil(total / perPage),
    };
  }

  static getOrmPagination(
    count: number,
    defaultPager: IPagerParams,
    pagination: Partial<IPagerParams> = {},
  ): Required<IPagerParams> {
    const perPage = pagination.perPage
      ? pagination.perPage
      : defaultPager.perPage;
    let page = pagination.page ? pagination.page : defaultPager.page;
    let skip = (page - 1) * perPage;

    if (count <= skip) {
      page = Math.max(Math.ceil(count / perPage), 1);
      skip = (page - 1) * perPage;
    }

    const totalPages = Math.ceil(count / perPage);

    return {
      take: perPage,
      skip: (page - 1) * perPage,
      page,
      perPage,
      totalPages,
      totalItems: count,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async validateDataByDTO<T>(
    data: any,
    DTO: new () => T,
  ): Promise<ValidationError[]> {
    return validate(plainToClass(DTO, data));
  }
}
