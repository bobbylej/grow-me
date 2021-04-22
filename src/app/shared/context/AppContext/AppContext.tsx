import React, { createContext, useReducer } from 'react';
import { noContextProviderWarning } from 'app/shared/utils/contextUtils';
import { ContextModel } from 'app/shared/interfaces/context.interface';
import {
  AppContextActions,
  AppContextActionType,
} from 'app/shared/context/AppContext/AppContext.actions';

export interface AppContextState {
  readonly items?: string[];
}

export type AppContextModel = ContextModel<
  AppContextState,
  AppContextActions
>;

const initialContext: AppContextModel = {
  state: {},
  dispatch: () => {
    noContextProviderWarning();
  },
};

export const AppContext = createContext<AppContextModel>(
  initialContext,
);

const AppContextReducer = (
  state: AppContextState,
  action: AppContextActions,
): AppContextState => {
  switch (action.type) {
    case AppContextActionType.addItem:
      return {
        ...state,
        items: [...(state?.items || []), action.payload],
      };
    case AppContextActionType.removeItem:
      return {
        ...state,
        items: state?.items?.filter(
          (itemInArray) => itemInArray !== action.payload,
        ),
      };
    default:
      throw new Error('Wrong action type provided');
  }
};

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [state, dispatch] = useReducer(AppContextReducer, {});

  const appState = { state, dispatch };

  return (
    <AppContext.Provider value={{ ...appState }}>
      {children}
    </AppContext.Provider>
  );
};
