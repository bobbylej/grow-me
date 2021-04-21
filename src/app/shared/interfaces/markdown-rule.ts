import { MarkdownElementType } from 'app/shared/types/markdown-element.type';

export interface MarkdownRule {
  regex: RegExp;
  selector: {
    start: string;
    end: string;
  };
  children?: Partial<Record<MarkdownElementType, MarkdownRule>>;
}
