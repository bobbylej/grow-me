import { ContextAction } from 'app/shared/interfaces/context.interface';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export enum FormCreatorContextActionType {
  setTitle = 'setTitle',
  setDescription = 'setDescription',
  setElementValue = 'setElementValue',
  setMarkdown = 'setMarkdown',
  addElement = 'addElement',
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

type AddFormElementValueAction = ContextAction<
  FormCreatorContextActionType.addElement,
  { type: MarkdownRuleType; parentId?: string }
>;

export type FormCreatorContextActions =
  | SetTitleAction
  | SetDescriptionAction
  | SetFormElementValueAction
  | SetMarkdownAction
  | AddFormElementValueAction;
