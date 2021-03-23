export interface ContextAction<T, P> {
  type: T;
  payload: P;
}

export interface ContextModel<S, A> {
  state: S;
  dispatch: (action: A) => void;
}
