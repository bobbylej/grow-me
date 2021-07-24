import { v4 } from 'uuid';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import {
  AllMarkdownRules,
  Markdown,
} from 'app/shared/constants/markdown';
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';

export const generateFormElementByType = (
  type: MarkdownRuleType,
): FormElement => {
  switch (type) {
    case 'group':
    case 'section':
    case 'questionGroup':
      return {
        id: v4(),
        type,
        value: '',
      };
    case 'questionSingle':
      return {
        id: v4(),
        type,
        value: '',
        children: [generateFormElementByType('questionSentence')],
      };
    case 'questionSentence':
    case 'radioButton':
    case 'checkBox':
    case 'textInput':
    case 'textareaInput':
      return {
        id: v4(),
        type,
        value: '',
        children: [generateFormElementByType('weight')],
      };
    case 'weight':
      return {
        id: v4(),
        type,
        value: 1,
      };
  }
};

export const getPossibleChildrenTypes = (
  type?: MarkdownRuleType,
): MarkdownRuleType[] => {
  let children: MarkdownRule[] | undefined;
  if (type) {
    const markdownRule = AllMarkdownRules[type];
    children =
      markdownRule.children &&
      (Object.values(markdownRule.children) as MarkdownRule[]);
  } else {
    children = Object.values(Markdown) as MarkdownRule[];
  }
  return children?.map((child) => child?.id) || [];
};
