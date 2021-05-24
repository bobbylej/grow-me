import {
  MarkdownCheckBoxRule,
  MarkdownGroupRule,
  MarkdownQuestionGroupRule,
  MarkdownQuestionSentenceRule,
  MarkdownQuestionSingleRule,
  MarkdownRadioButtonRule,
  MarkdownSectionRule,
  MarkdownTextareaInputRule,
  MarkdownTextInputRule,
  MarkdownWeightRule,
} from 'app/shared/constants/markdown';
import { FormElement } from 'app/shared/interfaces/formElement.interface';

export const convertJsonToMarkdown = (
  form?: FormElement[],
  nestedLevel = 0,
): string => {
  return (
    form
      ?.map((formElement) =>
        convertFormElementToMarkdown(formElement, nestedLevel),
      )
      .join('') || ''
  );
};

export const convertFormElementToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  switch (formElement.type) {
    case 'group':
      return convertGroupToMarkdown(formElement, nestedLevel);
    case 'section':
      return convertSectionToMarkdown(formElement, nestedLevel);
    case 'questionSingle':
      return convertQuestionSingleToMarkdown(
        formElement,
        nestedLevel,
      );
    case 'questionGroup':
      return convertQuestionGroupToMarkdown(formElement, nestedLevel);
    case 'questionSentence':
      return convertQuestionSentenceToMarkdown(
        formElement,
        nestedLevel,
      );
    case 'radioButton':
      return convertRadioButtonToMarkdown(formElement, nestedLevel);
    case 'checkBox':
      return convertCheckBoxToMarkdown(formElement, nestedLevel);
    case 'textInput':
      return convertTextInputToMarkdown(formElement, nestedLevel);
    case 'textareaInput':
      return convertTextareaInputToMarkdown(formElement, nestedLevel);
    case 'weight':
      return convertWeightToMarkdown(formElement);
    default:
      return '';
    // TODO: Add converters for other elements
  }
};

export const convertGroupToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownGroupRule.selector.start
  }${formElement.value}${
    MarkdownGroupRule.selector.end
  }${children}\n`;
};

export const convertSectionToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownSectionRule.selector.start
  }${formElement.value}${
    MarkdownSectionRule.selector.end
  }${children}\n`;
};

export const convertQuestionSingleToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownQuestionSingleRule.selector.start
  }\n${children}${getIndentation(nestedLevel)}${
    MarkdownQuestionSingleRule.selector.end
  }\n`;
};

export const convertQuestionGroupToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownQuestionGroupRule.selector.start
  }\n${children}${getIndentation(nestedLevel)}${
    MarkdownQuestionGroupRule.selector.end
  }\n`;
};

export const convertQuestionSentenceToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownQuestionSentenceRule.selector.start
  }${children} ${formElement.value}${
    MarkdownQuestionSentenceRule.selector.end
  }`;
};

export const convertRadioButtonToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownRadioButtonRule.selector.start
  }${children} ${formElement.value}${
    MarkdownRadioButtonRule.selector.end
  }`;
};

export const convertCheckBoxToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownCheckBoxRule.selector.start
  }${children} ${formElement.value}${
    MarkdownCheckBoxRule.selector.end
  }`;
};

export const convertTextInputToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownTextInputRule.selector.start
  }${children}${MarkdownTextInputRule.selector.end}`;
};

export const convertTextareaInputToMarkdown = (
  formElement: FormElement,
  nestedLevel = 0,
): string => {
  const children = convertJsonToMarkdown(
    formElement.children,
    nestedLevel + 1,
  );
  return `${getIndentation(nestedLevel)}${
    MarkdownTextareaInputRule.selector.start
  }${children}${MarkdownTextareaInputRule.selector.end}`;
};

export const convertWeightToMarkdown = (
  formElement: FormElement,
): string => {
  return `${MarkdownWeightRule.selector.start}${formElement.value}${MarkdownWeightRule.selector.end}`;
};

const getIndentation = (nestedLevel = 0): string => {
  return ' '.repeat(nestedLevel);
};
