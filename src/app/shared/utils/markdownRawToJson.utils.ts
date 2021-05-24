import { v4 } from 'uuid';
import {
  Markdown,
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
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import {
  MarkdownRules,
  MarkdownRuleType,
} from 'app/shared/types/markdownRule.type';
import { MarkdownRuleConvertedJsonElements } from 'app/shared/types/markdownRuleConvertedElements.type';

export const DEFAULT_WEIGHT_MARKDOWN = '[1]';

export const convertMarkdownToJson = (
  markdownText: string,
  markdownRules: MarkdownRules = Markdown,
): FormElement[] => {
  if (markdownText) {
    const markdownJson: FormElement[] = [];
    Object.values(markdownRules).forEach((markdownRule) => {
      const [elements, textLeft] = convertMarkdownRule(
        markdownText,
        markdownRule?.id,
      );
      markdownJson.push(...(elements || []));
      markdownText = textLeft;
    });
    return markdownJson
      .sort((firstElement, secondElement) =>
        (firstElement.index?.start ?? 0) <
        (secondElement.index?.start ?? 0)
          ? -1
          : 1,
      )
      .map((markdownElement) => markdownElement);
  }
  return [];
};

export const convertMarkdownRule = (
  markdownText: string,
  markdownRuleType: MarkdownRuleType | undefined,
): MarkdownRuleConvertedJsonElements => {
  switch (markdownRuleType) {
    case 'group':
      return convertMarkdownGroup(markdownText);
    case 'section':
      return convertMarkdownSection(markdownText);
    case 'questionSingle':
      return convertMarkdownQuestionSingle(markdownText);
    case 'questionGroup':
      return convertMarkdownQuestionGroup(markdownText);
    case 'questionSentence':
      return convertMarkdownQuestionSentence(markdownText);
    case 'radioButton':
      return convertMarkdownRadioButton(markdownText);
    case 'checkBox':
      return convertMarkdownCheckBox(markdownText);
    case 'textInput':
      return convertMarkdownTextInput(markdownText);
    case 'textareaInput':
      return convertMarkdownTextareaInput(markdownText);
    case 'weight':
      return convertMarkdownWeight(markdownText);
    default:
      return [[], markdownText];
    // TODO: Add converters for other elements
  }
};

export const convertMarkdownRuleElements = (
  markdownText: string,
  markdownRule: MarkdownRule,
  generateElement: (match: RegExpMatchArray) => FormElement,
): MarkdownRuleConvertedJsonElements => {
  const matches = markdownText.matchAll(markdownRule.regex);
  const elements = Array.from(matches).map((match) => ({
    ...generateElement(match),
  }));
  let textLeft = '';
  let lastIndex = 0;
  elements.forEach((element) => {
    textLeft += markdownText.substring(
      lastIndex,
      element.index?.start ?? 0,
    );
    lastIndex = element.index?.end ?? 0;
  });
  textLeft += markdownText.substring(lastIndex);
  return [elements, textLeft];
};

export const generateSimpleJsonElement = (
  markdownRule: MarkdownRule,
  match: RegExpMatchArray,
  value?: string,
  childrenText?: string,
): FormElement => {
  return {
    id: v4(),
    type: markdownRule.id,
    value,
    index: {
      start: match.index || 0,
      end: (match.index || 0) + match[0].length,
    },
    children: childrenText
      ? convertMarkdownToJson(childrenText, markdownRule.children)
      : undefined,
  };
};

export const convertMarkdownRuleElementsToJson = (
  markdownText: string,
  markdownRule: MarkdownRule,
  valueIndex?: number,
  childrenIndex?: number,
  defaultChildren?: string,
): MarkdownRuleConvertedJsonElements => {
  const generateJsonElement = (match: RegExpMatchArray) => {
    return generateSimpleJsonElement(
      markdownRule,
      match,
      valueIndex ? match[valueIndex] : undefined,
      childrenIndex
        ? match[childrenIndex] || defaultChildren
        : undefined,
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    markdownRule,
    generateJsonElement,
  );
};

export const convertMarkdownGroup = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownGroupRule,
    1,
    2,
  );
};

export const convertMarkdownSection = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownSectionRule,
    1,
    2,
  );
};

export const convertMarkdownQuestionSingle = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownQuestionSingleRule,
    undefined,
    1,
  );
};

export const convertMarkdownQuestionGroup = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownQuestionGroupRule,
    undefined,
    1,
  );
};

export const convertMarkdownQuestionSentence = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownQuestionSentenceRule,
    2,
    1,
    DEFAULT_WEIGHT_MARKDOWN,
  );
};

export const convertMarkdownRadioButton = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownRadioButtonRule,
    2,
    1,
    DEFAULT_WEIGHT_MARKDOWN,
  );
};

export const convertMarkdownCheckBox = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownCheckBoxRule,
    2,
    1,
    DEFAULT_WEIGHT_MARKDOWN,
  );
};

export const convertMarkdownTextInput = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownTextInputRule,
    undefined,
    1,
    DEFAULT_WEIGHT_MARKDOWN,
  );
};

export const convertMarkdownTextareaInput = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownTextareaInputRule,
    undefined,
    1,
    DEFAULT_WEIGHT_MARKDOWN,
  );
};

export const convertMarkdownWeight = (
  markdownText: string,
): MarkdownRuleConvertedJsonElements => {
  return convertMarkdownRuleElementsToJson(
    markdownText,
    MarkdownWeightRule,
    1,
  );
};
