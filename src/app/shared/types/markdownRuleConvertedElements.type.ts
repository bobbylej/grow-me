import { ReactElement } from 'react';
import { MarkdownRuleElement } from 'app/shared/interfaces/markdownRuleElement.interface';
import { MarkdownRuleProps } from 'app/shared/interfaces/markdownRuleProps.interface';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import {
  AddFormElement,
  SetFormElementValue,
} from 'app/shared/types/formCreatorAction.type';

export type MarkdownRuleConvertedElements = [
  MarkdownRuleElement[],
  string,
];

export type MarkdownRuleConvertedJsonElements = [
  FormElement[],
  string,
];

export type MarkdownRuleJsxConverter = (
  markdownRuleElementJson: FormElement,
  props?: MarkdownRuleProps,
  setValue?: SetFormElementValue,
  addFormElement?: AddFormElement,
) => ReactElement;
