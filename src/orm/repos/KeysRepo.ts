import {
  EntityRepository,
  FindManyOptions,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import { RSAKey } from 'src/orm/entities/RSAKey';
import { IPagerParams } from 'src/types';
import { UtilsService } from 'src/modules/utils/utils.service';

export interface IStorageFilter {
  entryName?: string;
  accountId?: number;
}

@EntityRepository(RSAKey)
export class KeysRepo extends Repository<RSAKey> {
  prepareFilterParams(filter: IStorageFilter): FindManyOptions<RSAKey> {
    return {
      where: (qb: SelectQueryBuilder<RSAKey>): void => {
        qb.where('RSAKey__entry.code != "system"');

        if (filter.accountId !== undefined) {
          qb.andWhere('RSAKey__entry.account_id = :accountId', {
            accountId: filter.accountId,
          });
        }

        if (filter && filter.entryName) {
          qb.where('RSAKey__entry.name like :entryName', {
            entryName: `%${filter.entryName}%`,
          });
        }
      },
      relations: ['entry'],
    };
  }

  /*
  async getStorageCount(filter: IStorageFilter): Promise<number> {
    const findParams = this.prepareFilterParams(filter);
    return await this.count(findParams);
  }
  */

  async getStorage(
    pagination: IPagerParams,
    filter: IStorageFilter = {},
    defaultPager: IPagerParams,
  ): Promise<[RSAKey[], Required<IPagerParams>]> {
    const findParams = this.prepareFilterParams(filter);

    const count = await this.count(findParams);
    const pager = UtilsService.getOrmPagination(
      count,
      defaultPager,
      pagination,
    );

    const items = await this.find({
      ...findParams,
      skip: pager.skip,
      take: pager.take,
    });

    return [items, pager];
  }
}
