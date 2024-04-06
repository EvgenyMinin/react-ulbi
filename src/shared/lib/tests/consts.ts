import type { IStateSchema } from 'app/providers/StoreProvider';

export const INITIAL_STATE: IStateSchema = {
  counter: { value: 0 },
  user: {},
};

export const INITIAL_ROUTE: string = '/';
