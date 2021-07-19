import { ContextAction } from 'app/shared/interfaces/context.interface';
import { FormElementValue } from 'app/shared/types/formElementValue.type';

export enum FormCreatorContextActionType {
  setTitle = 'setTitle',
  setDescription = 'setDescription',
  setElementValue = 'setElementValue',
  setMarkdown = 'setMarkdown',
}

type SetTitleAction = ContextAction<
  FormCreatorContextActionType.setTitle,
  string
>;

type SetDescriptionAction = ContextAction<
  FormCreatorContextActionType.setDescription,
  string
>;

type SetFormElementValueAction = ContextAction<
  FormCreatorContextActionType.setElementValue,
  { id: string; value?: FormElementValue }
>;

type SetMarkdownAction = ContextAction<
  FormCreatorContextActionType.setMarkdown,
  string
>;

export type FormCreatorContextActions =
  | SetTitleAction
  | SetDescriptionAction
  | SetFormElementValueAction
  | SetMarkdownAction;
