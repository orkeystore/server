export interface IPagerParams {
  page: number;
  perPage: number;
  totalPages?: number;
  totalItems?: number;
  skip?: number;
  take?: number;
}

export interface IPaged<T> {
  items: T[];
  pager: IPagerParams;
}
