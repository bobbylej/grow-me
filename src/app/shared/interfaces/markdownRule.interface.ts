import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export interface MarkdownRule {
  id: MarkdownRuleType;
  regex: RegExp;
  selector: {
    start: string;
    end: string;
  };
  children?: Partial<Record<MarkdownRuleType, MarkdownRule>>;
}

export interface MarkdownRuleDocumentation {
  name: string;
  syntax: string;
  description: string;
  defaultValue?: string;
  children?: Partial<
    Record<MarkdownRuleType, MarkdownRuleDocumentation>
  >;
}
