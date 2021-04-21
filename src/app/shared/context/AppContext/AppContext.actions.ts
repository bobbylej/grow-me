import { ContextAction } from 'app/shared/interfaces/context.interface';

export enum AppContextActionType {
  addItem = 'addItem',
  removeItem = 'removeItem',
}

type AddItemAction = ContextAction<
  AppContextActionType.addItem,
  string
>;

type RemoveItemAction = ContextAction<
  AppContextActionType.removeItem,
  string
>;

export type AppContextActions = AddItemAction | RemoveItemAction;
