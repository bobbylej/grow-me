import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export interface FormElement {
  id: string;
  type: MarkdownRuleType;
  index?: { start: number; end: number };
  value?: FormElementValue;
  children?: FormElement[];
}
