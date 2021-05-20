import React from 'react';
import {
  FormControlLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { MarkdownRuleElementJson } from 'app/shared/interfaces/markdownRuleElementJson.interface';
import { MarkdownRuleProps } from 'app/shared/interfaces/markdownRuleProps.interface';
import { generateElementKey } from 'app/shared/utils/markdownRawToJsx.utils';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { RadioCustom } from 'app/shared/components/RadioCustom/RadioCustom';
import { CheckBoxCustom } from 'app/shared/components/CheckBoxCustom/CheckBoxCustom';
import { Weight } from 'app/shared/components/Weight/Weight';

export const convertMarkdownRulesJsonToJsx = (
  markdownRulesElementsJson: MarkdownRuleElementJson[],
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement[] => {
  return markdownRulesElementsJson.map(
    (markdownRuleElementJson, index) =>
      convertMarkdownRuleJsonToJsx(
        markdownRuleElementJson,
        index,
        parentKey,
        props,
      ),
  );
};

export const convertMarkdownRuleJsonToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  return getMarkdownRuleJsxConverter(markdownRuleElementJson.type)(
    markdownRuleElementJson,
    index,
    parentKey,
    props,
  );
};

export const getMarkdownRuleJsxConverter = (
  markdownRuleType: MarkdownRuleType,
): ((
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
) => React.ReactElement) => {
  switch (markdownRuleType) {
    case 'group':
      return convertMarkdownGroupToJsx;
    case 'section':
      return convertMarkdownSectionToJsx;
    case 'questionSingle':
      return convertMarkdownQuestionSingleToJsx;
    case 'questionGroup':
      return convertMarkdownQuestionGroupToJsx;
    case 'questionSentence':
      return convertMarkdownQuestionSentenceToJsx;
    case 'radioButton':
      return convertMarkdownRadioButtonToJsx;
    case 'checkBox':
      return convertMarkdownCheckBoxToJsx;
    case 'textInput':
      return convertMarkdownTextInputToJsx;
    case 'textareaInput':
      return convertMarkdownTextareaInputToJsx;
    case 'weight':
      return convertMarkdownWeightToJsx;
  }
};

export const convertMarkdownGroupToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  return (
    <FormBox
      key={key}
      title={markdownRuleElementJson.value}
      color="primary"
    >
      {markdownRuleElementJson.children &&
        convertMarkdownRulesJsonToJsx(
          markdownRuleElementJson.children,
          key,
          props,
        )}
    </FormBox>
  );
};

export const convertMarkdownSectionToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  return (
    <FormBox
      key={key}
      title={markdownRuleElementJson.value}
      color="primary"
      headerVariant="outlined"
    >
      {markdownRuleElementJson.children &&
        convertMarkdownRulesJsonToJsx(
          markdownRuleElementJson.children,
          key,
          props,
        )}
    </FormBox>
  );
};

export const convertMarkdownQuestionSingleToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const questionSentences = markdownRuleElementJson.children?.filter(
    (markdownRule) => markdownRule.type === 'questionSentence',
  );
  const content = markdownRuleElementJson.children?.filter(
    (markdownRule) => markdownRule.type !== 'questionSentence',
  );
  return (
    <SingleQuestion
      key={key}
      text={
        questionSentences &&
        convertMarkdownRulesJsonToJsx(questionSentences, key, props)
      }
    >
      {content && convertMarkdownRulesJsonToJsx(content, key, props)}
    </SingleQuestion>
  );
};

export const convertMarkdownQuestionGroupToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const questionSentences = markdownRuleElementJson.children?.filter(
    (markdownRule) => markdownRule.type === 'questionSentence',
  );
  const content = markdownRuleElementJson.children?.filter(
    (markdownRule) => markdownRule.type !== 'questionSentence',
  );
  return (
    // TODO: Use proper component
    <FormBox
      key={key}
      title={
        questionSentences &&
        convertMarkdownRulesJsonToJsx(questionSentences, key, props)
      }
      color="primary"
      headerVariant="outlined"
    >
      {content && convertMarkdownRulesJsonToJsx(content, key, props)}
    </FormBox>
  );
};

export const convertMarkdownQuestionSentenceToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const children = getChildrenWithDefaultWeight(
    markdownRuleElementJson.children,
  );
  return (
    // TODO: Use proper component
    <div key={`${key}-wrapper`}>
      <Typography key={key} variant="body1">
        {markdownRuleElementJson.value}
      </Typography>
      {children &&
        convertMarkdownRulesJsonToJsx(children, key, {
          ...props,
          color: 'primaryLight',
        })}
    </div>
  );
};

export const convertMarkdownRadioButtonToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const children = getChildrenWithDefaultWeight(
    markdownRuleElementJson.children,
  );
  return (
    // TODO: Use proper component
    <div key={`${key}-wrapper`}>
      <FormControlLabel
        key={key}
        value={markdownRuleElementJson.value}
        control={<RadioCustom color="primary" />}
        label={markdownRuleElementJson.value}
      />
      {children &&
        convertMarkdownRulesJsonToJsx(children, key, props)}
    </div>
  );
};

export const convertMarkdownCheckBoxToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const children = getChildrenWithDefaultWeight(
    markdownRuleElementJson.children,
  );
  return (
    // TODO: Use proper component
    <div key={`${key}-wrapper`}>
      <FormControlLabel
        key={key}
        value={markdownRuleElementJson.value}
        control={<CheckBoxCustom color="primary" />}
        label={markdownRuleElementJson.value}
      />
      {children &&
        convertMarkdownRulesJsonToJsx(children, key, props)}
    </div>
  );
};

export const convertMarkdownTextInputToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const children = getChildrenWithDefaultWeight(
    markdownRuleElementJson.children,
  );
  return (
    // TODO: Use proper component
    <div key={`${key}-wrapper`}>
      <TextField
        key={key}
        value={markdownRuleElementJson.value}
        fullWidth
      />
      {children &&
        convertMarkdownRulesJsonToJsx(children, key, props)}
    </div>
  );
};

export const convertMarkdownTextareaInputToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const children = getChildrenWithDefaultWeight(
    markdownRuleElementJson.children,
  );
  return (
    // TODO: Use proper component
    <div key={`${key}-wrapper`}>
      <TextField
        key={key}
        value={markdownRuleElementJson.value}
        multiline
        fullWidth
      />
      {children &&
        convertMarkdownRulesJsonToJsx(children, key, props)}
    </div>
  );
};

export const convertMarkdownWeightToJsx = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
): React.ReactElement => {
  const key = generateElementKey(
    markdownRuleElementJson.type,
    index,
    parentKey,
  );
  const value = markdownRuleElementJson.value ?? 1;
  return <Weight key={key} weight={+value} color={props?.color} />;
};

const getChildrenWithDefaultWeight = (
  children?: MarkdownRuleElementJson[],
): MarkdownRuleElementJson[] =>
  children || [
    {
      type: 'weight',
      value: '1',
    },
  ];
