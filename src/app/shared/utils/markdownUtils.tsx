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
  parentKey?: string,
): Array<React.ReactElement> | undefined => {
  if (markdownText) {
    const markdownElements: Array<MarkdownRuleElement> = [];
    Object.values(markdownRules).forEach((markdownRule) => {
      const [elements, textLeft] = convertMarkdownRule(
        markdownText,
        markdownRule?.id,
        parentKey,
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  switch (markdownRuleType) {
    case 'group':
      return convertMarkdownGroup(markdownText, parentKey);
    case 'section':
      return convertMarkdownSection(markdownText, parentKey);
    case 'questionSingle':
      return convertMarkdownQuestionSingle(markdownText, parentKey);
    case 'questionGroup':
      return convertMarkdownQuestionGroup(markdownText, parentKey);
    case 'questionSentence':
      return convertMarkdownQuestionSentence(markdownText, parentKey);
    case 'radioButton':
      return convertMarkdownRadioButton(markdownText, parentKey);
    case 'checkBox':
      return convertMarkdownCheckBox(markdownText, parentKey);
    case 'textInput':
      return convertMarkdownTextInput(markdownText, parentKey);
    case 'textareaInput':
      return convertMarkdownTextareaInput(markdownText, parentKey);
    case 'weight':
      return convertMarkdownWeight(markdownText, parentKey);
    default:
      return [[], markdownText];
    // TODO: Add converters for other elements
  }
};

export const convertMarkdownRuleElements = (
  markdownText: string,
  markdownRule: MarkdownRule,
  generateJsxElement: (
    match: RegExpMatchArray,
    index: number,
  ) => ReactElement,
): MarkdownRuleConvertedElements => {
  const matches = markdownText.matchAll(markdownRule.regex);
  const elements = Array.from(matches).map((match, index) => ({
    index: {
      start: match.index || 0,
      end: (match.index || 0) + match[0].length,
    },
    element: generateJsxElement(match, index),
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

export const generateElementKey = (
  elementName: string,
  index: number,
  parentKey?: string,
): string => {
  return `${parentKey ? `${parentKey}.` : ''}${elementName}-${index}`;
};

export const convertMarkdownGroup = (
  markdownText: string,
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownGroupRule.id,
      index,
      parentKey,
    );
    return (
      <FormBox key={key} title={match[1]} color="primary">
        {convertMarkdown(match[2], MarkdownGroupRule.children, key)}
      </FormBox>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownGroupRule,
    generateJsxElement,
  );
};

export const convertMarkdownSection = (
  markdownText: string,
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownSectionRule.id,
      index,
      parentKey,
    );
    return (
      <FormBox
        key={key}
        title={match[1]}
        color="primary"
        headerVariant="outlined"
      >
        {convertMarkdown(match[2], MarkdownSectionRule.children, key)}
      </FormBox>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownSectionRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionSingle = (
  markdownText: string,
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownQuestionSingleRule.id,
      index,
      parentKey,
    );
    return (
      // TODO: Use proper component
      <FormBox
        key={key}
        title="Question Single"
        color="primary"
        headerVariant="outlined"
      >
        {convertMarkdown(
          match[1],
          MarkdownQuestionSingleRule.children,
          key,
        )}
      </FormBox>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownQuestionSingleRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionGroup = (
  markdownText: string,
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownQuestionGroupRule.id,
      index,
      parentKey,
    );
    return (
      // TODO: Use proper component
      <FormBox
        key={key}
        title="Question Group"
        color="primary"
        headerVariant="outlined"
      >
        {convertMarkdown(
          match[1],
          MarkdownQuestionGroupRule.children,
          key,
        )}
      </FormBox>
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownQuestionGroupRule,
    generateJsxElement,
  );
};

export const convertMarkdownQuestionSentence = (
  markdownText: string,
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownQuestionSentenceRule.id,
      index,
      parentKey,
    );
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <div key={`${key}-wrapper`}>
        <Typography key={key} variant="body2">
          {match[2]}
        </Typography>
        {convertMarkdown(
          children,
          MarkdownQuestionSentenceRule.children,
          key,
        )}
      </div>
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownRadioButtonRule.id,
      index,
      parentKey,
    );
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <div key={`${key}-wrapper`}>
        <FormControlLabel
          key={key}
          value={match[2]}
          control={<Radio color="primary" />}
          label={match[2]}
        />
        {convertMarkdown(
          children,
          MarkdownCheckBoxRule.children,
          key,
        )}
      </div>
    );
  };
  const [elements, textLeft] = convertMarkdownRuleElements(
    markdownText,
    MarkdownRadioButtonRule,
    generateJsxElement,
  );
  const groupedMarkdownElement = groupMarkdownRuleElements(elements);
  const groupKey = generateElementKey(
    `${MarkdownRadioButtonRule.id}-group`,
    0,
    parentKey,
  );
  const jsxElement = (
    <RadioGroup key={groupKey}>
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownCheckBoxRule.id,
      index,
      parentKey,
    );
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <div key={`${key}-wrapper`}>
        <FormControlLabel
          key={key}
          value={match[2]}
          control={<Checkbox color="primary" />}
          label={match[2]}
        />
        {convertMarkdown(
          children,
          MarkdownCheckBoxRule.children,
          key,
        )}
      </div>
    );
  };
  const [elements, textLeft] = convertMarkdownRuleElements(
    markdownText,
    MarkdownCheckBoxRule,
    generateJsxElement,
  );
  const groupedMarkdownElement = groupMarkdownRuleElements(elements);
  const groupKey = generateElementKey(
    `${MarkdownCheckBoxRule.id}-group`,
    0,
    parentKey,
  );
  const jsxElement = (
    <FormGroup key={groupKey}>
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownTextInputRule.id,
      index,
      parentKey,
    );
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <div key={`${key}-wrapper`}>
        <TextField key={key} value={match[2]} fullWidth />
        {convertMarkdown(
          children,
          MarkdownTextInputRule.children,
          key,
        )}
      </div>
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownTextareaInputRule.id,
      index,
      parentKey,
    );
    const children = match[1] || '[1]';
    return (
      // TODO: Use proper component
      <div key={`${key}-wrapper`}>
        <TextField key={key} value={match[2]} multiline fullWidth />
        {convertMarkdown(
          children,
          MarkdownTextareaInputRule.children,
          key,
        )}
      </div>
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
  parentKey?: string,
): MarkdownRuleConvertedElements => {
  const generateJsxElement = (
    match: RegExpMatchArray,
    index: number,
  ) => {
    const key = generateElementKey(
      MarkdownWeightRule.id,
      index,
      parentKey,
    );
    return (
      // TODO: Use proper component
      <TextField
        key={key}
        name={key}
        type="number"
        value={match[1]}
        style={{ display: 'inline-block', width: '2rem' }}
      />
    );
  };
  return convertMarkdownRuleElements(
    markdownText,
    MarkdownWeightRule,
    generateJsxElement,
  );
};
