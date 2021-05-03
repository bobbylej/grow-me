import React, { ReactElement } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
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
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { MarkdownRuleElement } from 'app/shared/interfaces/markdownRuleElement.interface';
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';
import {
  MarkdownRules,
  MarkdownRuleType,
} from 'app/shared/types/markdownRule.type';

export type MarkdownRuleConvertedElements = [
  Array<MarkdownRuleElement>,
  string,
];

export const convertMarkdown = (
  markdownText: string,
  markdownRules: MarkdownRules = Markdown,
): Array<React.ReactElement> | undefined => {
  if (markdownText) {
    const markdownElements: Array<MarkdownRuleElement> = [];
    Object.values(markdownRules).forEach((markdownRule) => {
      const [elements, textLeft] = convertMarkdownRule(
        markdownText,
        markdownRule?.id,
      );
      markdownElements.push(...elements);
      markdownText = textLeft;
    });
    return markdownElements
      .sort((firstMarkdownRuleElement, secondMarkdownRuleElement) =>
        firstMarkdownRuleElement.index.start <
        secondMarkdownRuleElement.index.start
          ? -1
          : 1,
      )
      .map((markdownRuleElement) => markdownRuleElement.element);
  }
  return undefined;
};

export const convertMarkdownRule = (
  markdownText: string,
  markdownRuleType: MarkdownRuleType | undefined,
): MarkdownRuleConvertedElements => {
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
  generateJsxElement: (match: RegExpMatchArray) => ReactElement,
): MarkdownRuleConvertedElements => {
  const matches = markdownText.matchAll(markdownRule.regex);
  const elements = Array.from(matches).map((match) => ({
    index: {
      start: match.index || 0,
      end: (match.index || 0) + match[0].length,
    },
    element: generateJsxElement(match),
  }));
  let textLeft = '';
  let lastIndex = 0;
  elements.forEach((element) => {
    textLeft += markdownText.substring(
      lastIndex,
      element.index.start,
    );
    lastIndex = element.index.end;
  });
  textLeft += markdownText.substring(lastIndex);
  return [elements, textLeft];
};

export const groupMarkdownRuleElements = (
  markdownRuleElements: Array<MarkdownRuleElement>,
): MarkdownRuleElement => {
  const index = markdownRuleElements
    .map(({ index }) => index)
    .reduce(
      (previousIndex, currentIndex) => ({
        start:
          previousIndex && previousIndex.start < currentIndex.start
            ? previousIndex.start
            : currentIndex.start,
        end:
          previousIndex && previousIndex.end > currentIndex.end
            ? previousIndex.end
            : currentIndex.end,
      }),
      { start: Number.MAX_SAFE_INTEGER, end: 0 },
    );
  const jsxElement = markdownRuleElements && (
    <>{markdownRuleElements.map(({ element }) => element)}</>
  );
  return { element: jsxElement, index };
};

export const convertMarkdownGroup = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => (
    <FormBox
      key={`${MarkdownGroupRule.id}-${match.index}`}
      title={match[1]}
      color="primary"
    >
      {convertMarkdown(match[2], MarkdownGroupRule.children)}
    </FormBox>
  );
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownGroupRule,
    generateJsxElement,
  );
};

export const convertMarkdownSection = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => (
    <FormBox
      key={`${MarkdownSectionRule.id}-${match.index}`}
      title={match[1]}
      color="primary"
      headerVariant="outlined"
    >
      {convertMarkdown(match[2], MarkdownSectionRule.children)}
    </FormBox>
  );
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownSectionRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionSingle = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => (
    // TODO: Use proper component
    <FormBox
      key={`${MarkdownQuestionSingleRule.id}-${match.index}`}
      title="Question Single"
      color="primary"
      headerVariant="outlined"
    >
      {convertMarkdown(match[1], MarkdownQuestionSingleRule.children)}
    </FormBox>
  );
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownQuestionSingleRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionGroup = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => (
    // TODO: Use proper component
    <FormBox
      key={`${MarkdownQuestionGroupRule.id}-${match.index}`}
      title="Question Group"
      color="primary"
      headerVariant="outlined"
    >
      {convertMarkdown(match[1], MarkdownQuestionGroupRule.children)}
    </FormBox>
  );
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownQuestionGroupRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionSentence = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => {
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <Typography
        key={`${MarkdownQuestionSentenceRule.id}-${match.index}`}
        variant="body2"
      >
        {match[2]}{' '}
        {convertMarkdown(
          children,
          MarkdownQuestionSentenceRule.children,
        )}
      </Typography>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownQuestionSentenceRule,
    generateJsxElement,
  );
};

export const convertMarkdownRadioButton = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => {
    const children = match[1] || '[1]';
    const labelAndWeightElement = (
      <>
        {convertMarkdown(children, MarkdownCheckBoxRule.children)}{' '}
        {match[2]}
      </>
    );
    return (
      // TODO: Use proper component
      <FormControlLabel
        key={`${MarkdownRadioButtonRule.id}-${match.index}`}
        value={match[2]}
        control={<Radio color="primary" />}
        label={labelAndWeightElement}
      />
    );
  };
  const [elements, textLeft] = convertMarkdownRuleElements(
    markdownText,
    MarkdownRadioButtonRule,
    generateJsxElement,
  );
  const groupedMarkdownElement = groupMarkdownRuleElements(elements);
  const jsxElement = (
    <RadioGroup
      key={`${MarkdownRadioButtonRule.id}-group-${groupedMarkdownElement.index.start}`}
    >
      {groupedMarkdownElement.element}
    </RadioGroup>
  );

  return [
    [{ element: jsxElement, index: groupedMarkdownElement.index }],
    textLeft,
  ];
};

export const convertMarkdownCheckBox = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => {
    const children = match[1] || '[1]';
    const labelAndWeightElement = (
      <>
        {convertMarkdown(children, MarkdownCheckBoxRule.children)}{' '}
        {match[2]}
      </>
    );
    return (
      // TODO: Use proper component
      <FormControlLabel
        key={`${MarkdownCheckBoxRule.id}-${match.index}`}
        value={match[2]}
        control={<Checkbox color="primary" />}
        label={labelAndWeightElement}
      />
    );
  };
  const [elements, textLeft] = convertMarkdownRuleElements(
    markdownText,
    MarkdownCheckBoxRule,
    generateJsxElement,
  );
  const groupedMarkdownElement = groupMarkdownRuleElements(elements);
  const jsxElement = (
    <FormGroup
      key={`${MarkdownCheckBoxRule.id}-group-${groupedMarkdownElement.index.start}`}
    >
      {groupedMarkdownElement.element}
    </FormGroup>
  );

  return [
    [{ element: jsxElement, index: groupedMarkdownElement.index }],
    textLeft,
  ];
};

export const convertMarkdownTextInput = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => {
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <>
        <TextField
          key={`${MarkdownTextInputRule.id}-${match.index}`}
          value={match[2]}
        />
        {convertMarkdown(children, MarkdownTextInputRule.children)}
      </>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownTextInputRule,
    generateJsxElement,
  );
};

export const convertMarkdownTextareaInput = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => {
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <>
        <TextField
          key={`${MarkdownTextareaInputRule.id}-${match.index}`}
          value={match[2]}
          multiline
        />
        {convertMarkdown(
          children,
          MarkdownTextareaInputRule.children,
        )}
      </>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownTextareaInputRule,
    generateJsxElement,
  );
};

export const convertMarkdownWeight = (
  markdownText: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (match: RegExpMatchArray) => (
    // TODO: Use proper component
    <TextField
      type="number"
      value={match[1]}
      style={{ display: 'inline-block', width: '2rem' }}
    />
  );
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownWeightRule,
    generateJsxElement,
  );
};
