import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export interface MarkdownRuleElementJson {
  type: MarkdownRuleType;
  index?: { start: number; end: number };
  value?: string | null;
  children?: MarkdownRuleElementJson[];
}
