import { ReactElement } from 'react';
import { MarkdownRuleElement } from 'app/shared/interfaces/markdownRuleElement.interface';
import { MarkdownRuleElementJson } from 'app/shared/interfaces/markdownRuleElementJson.interface';
import { MarkdownRuleProps } from 'app/shared/interfaces/markdownRuleProps.interface';

export type MarkdownRuleConvertedElements = [
  MarkdownRuleElement[],
  string,
];

export type MarkdownRuleConvertedJsonElements = [
  MarkdownRuleElementJson[],
  string,
];

export type MarkdownRuleJsxConverter = (
  markdownRuleElementJson: MarkdownRuleElementJson,
  index: number,
  parentKey?: string,
  props?: MarkdownRuleProps,
) => ReactElement;
