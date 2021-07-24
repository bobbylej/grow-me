import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export type SetFormElementValue = (
  id: string,
  value?: FormElementValue,
) => void;

export type AddFormElement = (
  type: MarkdownRuleType,
  parentId?: string,
) => void;
