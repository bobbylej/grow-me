import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';

export const MarkdownGroupRule: MarkdownRule = {
  id: 'group',
  regex: /\*# (.*)/g,
  selector: {
    start: '*#',
    end: '\n',
  },
};

export const MarkdownSectionRule: MarkdownRule = {
  id: 'section',
  regex: /\*## (.*)/g,
  selector: {
    start: '*##',
    end: '\n',
  },
};

export const MarkdownWeightRule: MarkdownRule = {
  id: 'weight',
  regex: /\[(\d+)\]/g,
  selector: {
    start: '[',
    end: ']',
  },
};

export const MarkdownRadioButtonRule: MarkdownRule = {
  id: 'radioButton',
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
  id: 'checkBox',
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
  id: 'textInput',
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
  id: 'textareaInput',
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
  id: 'questionSentence',
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
  id: 'questionSingle',
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
  id: 'questionGroup',
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
  Record<MarkdownRuleType, MarkdownRule>
> = {
  group: MarkdownGroupRule,
  section: MarkdownSectionRule,
  questionSingle: MarkdownQuestionSingleRule,
  questionGroup: MarkdownQuestionGroupRule,
};
