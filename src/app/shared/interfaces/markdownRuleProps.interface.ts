import { Color } from 'app/shared/types/color.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export interface MarkdownRuleProps {
  color?: Color;
  placeholders?: Partial<Record<MarkdownRuleType, string>>;
}
