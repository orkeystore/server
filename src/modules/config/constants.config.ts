import { IPagerParams } from 'src/types';

export interface IConfigConstants {
  defaultPager: IPagerParams;
}

export const loadConstantsConfig = async (): Promise<IConfigConstants> => {
  return { defaultPager: { page: 1, perPage: 10 } };
};
