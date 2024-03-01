import { FC, ReactNode } from 'react';

import { Provider } from 'react-redux';

import { IStateSchema, createReduxStore } from '../config';

type StoreProviderProps = {
  initialState?: IStateSchema;
  children?: ReactNode;
};

export const StoreProvider: FC<StoreProviderProps> = ({ initialState, children }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
