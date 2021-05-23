import { ContextAction } from 'app/shared/interfaces/context.interface';
import { FormElementValue } from 'app/shared/types/formElementValue.type';

export enum FormCreatorContextActionType {
  setElementValue = 'setElementValue',
  setMarkdown = 'setMarkdown',
}

type SetFormElementValueAction = ContextAction<
  FormCreatorContextActionType.setElementValue,
  { id: string; value?: FormElementValue }
>;

type SetMarkdownAction = ContextAction<
  FormCreatorContextActionType.setMarkdown,
  string
>;

export type FormCreatorContextActions =
  | SetFormElementValueAction
  | SetMarkdownAction;
