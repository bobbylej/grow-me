import { ContextAction } from 'app/shared/interfaces/context.interface';

export enum PageContextActionType {
  setTitle = 'setTitle',
}

type SetTitleAction = ContextAction<
  PageContextActionType.setTitle,
  string | undefined
>;

export type PageContextActions = SetTitleAction;
