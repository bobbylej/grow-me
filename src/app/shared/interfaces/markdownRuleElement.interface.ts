import { ReactElement } from 'react';

export interface MarkdownRuleElement {
  element: ReactElement;
  index: { start: number; end: number };
}
