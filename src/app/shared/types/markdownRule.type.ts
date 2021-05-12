import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';

export type MarkdownRuleType =
  | 'group'
  | 'section'
  | 'questionSingle'
  | 'questionGroup'
  | 'questionSentence'
  | 'weight'
  | 'textInput'
  | 'textareaInput'
  | 'radioButton'
  | 'checkBox';

export type MarkdownRules = Partial<
  Record<MarkdownRuleType, MarkdownRule>
>;
