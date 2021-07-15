import React, { createContext, useReducer } from 'react';
import { noContextProviderWarning } from 'app/shared/utils/context.utils';
import { ContextModel } from 'app/shared/interfaces/context.interface';
import {
  IntersectionContextActions,
  IntersectionContextActionType,
} from 'app/shared/context/IntersectionContext/IntersectionContext.actions';
import { IntersectionState } from 'app/shared/enums/intersectionState.enum';

export interface IntersectionContextState {
  readonly itemsState: Record<string, IntersectionState>;
}

export type IntersectionContextModel = ContextModel<
  IntersectionContextState,
  IntersectionContextActions
>;

export interface IntersectionProviderProps {
  initialState?: IntersectionContextState;
}

const initialContext: IntersectionContextModel = {
  state: {
    itemsState: {},
  },
  dispatch: () => {
    noContextProviderWarning();
  },
};

export const IntersectionContext = createContext<IntersectionContextModel>(
  initialContext,
);

const IntersectionReducer = (
  state: IntersectionContextState,
  action: IntersectionContextActions,
): IntersectionContextState => {
  switch (action.type) {
    case IntersectionContextActionType.setIntersection:
      return {
        ...state,
        itemsState: {
          ...state.itemsState,
          [action.payload.id]: action.payload.state,
        },
      };
    default:
      throw new Error('Wrong action type provided');
  }
};

export const IntersectionProvider = ({
  initialState,
  children,
}: React.PropsWithChildren<IntersectionProviderProps>): React.ReactElement => {
  const [state, dispatch] = useReducer(
    IntersectionReducer,
    initialState || initialContext.state,
  );

  const refsState = { state, dispatch };

  return (
    <IntersectionContext.Provider value={{ ...refsState }}>
      {children}
    </IntersectionContext.Provider>
  );
};
