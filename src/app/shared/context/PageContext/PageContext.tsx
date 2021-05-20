import React, { createContext, useReducer } from 'react';
import { noContextProviderWarning } from 'app/shared/utils/context.utils';
import { ContextModel } from 'app/shared/interfaces/context.interface';
import {
  PageContextActions,
  PageContextActionType,
} from 'app/shared/context/PageContext/PageContext.actions';

export interface PageContextState {
  readonly title: string;
}

export type PageContextModel = ContextModel<
  PageContextState,
  PageContextActions
>;

const initialContext: PageContextModel = {
  state: {
    title: 'Grow Me',
  },
  dispatch: () => {
    noContextProviderWarning();
  },
};

export const PageContext = createContext<PageContextModel>(
  initialContext,
);

const PageContextReducer = (
  state: PageContextState,
  action: PageContextActions,
): PageContextState => {
  switch (action.type) {
    case PageContextActionType.setTitle:
      return {
        ...state,
        title: action.payload ?? initialContext.state.title,
      };
    default:
      throw new Error('Wrong action type provided');
  }
};

export const PageProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [state, dispatch] = useReducer(
    PageContextReducer,
    initialContext.state,
  );

  const pageState = { state, dispatch };

  return (
    <PageContext.Provider value={{ ...pageState }}>
      {children}
    </PageContext.Provider>
  );
};
