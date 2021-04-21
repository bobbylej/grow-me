import { MarkdownElementType } from 'app/shared/types/markdown-element.type';
import { MarkdownRule } from 'app/shared/interfaces/markdown-rule';

export const MarkdownGroupRule: MarkdownRule = {
  regex: /\*# (.*)/g,
  selector: {
    start: '*#',
    end: '\n',
  },
};

export const MarkdownSectionRule: MarkdownRule = {
  regex: /\*## (.*)/g,
  selector: {
    start: '*##',
    end: '\n',
  },
};

export const MarkdownWeightRule: MarkdownRule = {
  regex: /\[(\d+)\]/g,
  selector: {
    start: '[',
    end: ']',
  },
};

export const MarkdownRadioButtonRule: MarkdownRule = {
  regex: /() (.*)/g,
  selector: {
    start: '()',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownCheckBoxRule: MarkdownRule = {
  regex: /[] (.*)/g,
  selector: {
    start: '[]',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownTextInputRule: MarkdownRule = {
  regex: /... (.*)/g,
  selector: {
    start: '...',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownTextareaInputRule: MarkdownRule = {
  regex: /.... (.*)/g,
  selector: {
    start: '....',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownQuestionSentenceRule: MarkdownRule = {
  regex: /### (.*)/g,
  selector: {
    start: '###',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownQuestionSingleRule: MarkdownRule = {
  regex: /^\*`([^\*`]*)^\*`/gm,
  selector: {
    start: '*`\n',
    end: '\n*`',
  },
  children: {
    questionSentence: MarkdownQuestionSentenceRule,
    radioButton: MarkdownRadioButtonRule,
    checkBox: MarkdownCheckBoxRule,
    textInput: MarkdownTextInputRule,
    textareaInput: MarkdownTextareaInputRule,
  },
};

export const MarkdownQuestionGroupRule: MarkdownRule = {
  regex: /^\*```([^\*`]*)^\*```/gm,
  selector: {
    start: '*```\n',
    end: '\n*```',
  },
  children: {
    questionSentence: MarkdownQuestionSentenceRule,
    radioButton: MarkdownRadioButtonRule,
    checkBox: MarkdownCheckBoxRule,
    textInput: MarkdownTextInputRule,
    textareaInput: MarkdownTextareaInputRule,
  },
};

export const Markdown: Partial<
  Record<MarkdownElementType, MarkdownRule>
> = {
  group: MarkdownGroupRule,
  section: MarkdownSectionRule,
  questionSingle: MarkdownQuestionSingleRule,
  questionGroup: MarkdownQuestionGroupRule,
};
