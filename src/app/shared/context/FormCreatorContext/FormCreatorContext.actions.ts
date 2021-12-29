import { FormCreatorContextState } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { ContextAction } from 'app/shared/interfaces/context.interface';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export enum FormCreatorContextActionType {
  setState = 'setState',
  setId = 'setId',
  setTitle = 'setTitle',
  setDescription = 'setDescription',
  setElementValue = 'setElementValue',
  setMarkdown = 'setMarkdown',
  addElement = 'addElement',
}

type SetStateAction = ContextAction<
  FormCreatorContextActionType.setState,
  FormCreatorContextState
>;

type SetIdAction = ContextAction<
  FormCreatorContextActionType.setId,
  string
>;

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
  | SetStateAction
  | SetIdAction
  | SetTitleAction
  | SetDescriptionAction
  | SetFormElementValueAction
  | SetMarkdownAction
  | AddFormElementValueAction;
