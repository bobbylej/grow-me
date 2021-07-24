import {
  MarkdownRules,
  MarkdownRuleType,
} from 'app/shared/types/markdownRule.type';
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';

const generateSingleSelectorMultilineRegex = (
  selector: string,
): RegExp => {
  return new RegExp(
    `^\\s*${selector}(.*)((?:\\r?\\n(?!^\\s*${selector}).*)*)`,
    'gm',
  );
};

const generateSingleSelectorSinglelineRegex = (
  selector: string,
  childSelector?: string,
): RegExp => {
  const childRegExp = childSelector ? `(${childSelector})?` : '';
  return new RegExp(`^\\s*${selector}${childRegExp}\\s*(.*)$`, 'gm');
};

const generateSingleSelectorSinglelineWithoutContentRegex = (
  selector: string,
  childSelector?: string,
): RegExp => {
  const childRegExp = childSelector ? `(${childSelector})?` : '';
  return new RegExp(`^\\s*${selector}${childRegExp}\\v*$`, 'gm');
};

const generatePairSelectorMultilineRegex = (
  selector: string,
): RegExp => {
  return new RegExp(
    `^\\s*${selector}\\s*\\n([\\s\\S]*?)\\n\\s*${selector}`,
    'gm',
  );
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
  regex: generateSingleSelectorSinglelineRegex(
    '\\*\\(\\)',
    '\\[\\d+\\]',
  ),
  selector: {
    start: '*()',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownCheckBoxRule: MarkdownRule = {
  id: 'checkBox',
  regex: generateSingleSelectorSinglelineRegex(
    '\\*\\[\\]',
    '\\[\\d+\\]',
  ),
  selector: {
    start: '*[]',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownTextInputRule: MarkdownRule = {
  id: 'textInput',
  regex: generateSingleSelectorSinglelineWithoutContentRegex(
    '\\*\\.{3}',
  ),
  selector: {
    start: '*...',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownTextareaInputRule: MarkdownRule = {
  id: 'textareaInput',
  regex: generateSingleSelectorSinglelineWithoutContentRegex(
    '\\*\\.{4}',
  ),
  selector: {
    start: '*....',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownQuestionSentenceRule: MarkdownRule = {
  id: 'questionSentence',
  regex: generateSingleSelectorSinglelineRegex(
    '\\*###',
    '\\[\\d+\\]',
  ),
  selector: {
    start: '*###',
    end: '\n',
  },
  children: {
    weight: MarkdownWeightRule,
  },
};

export const MarkdownQuestionSingleRule: MarkdownRule = {
  id: 'questionSingle',
  regex: generatePairSelectorMultilineRegex('\\*`'),
  selector: {
    start: '*`',
    end: '*`',
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
  regex: generatePairSelectorMultilineRegex('\\*```'),
  selector: {
    start: '*```',
    end: '*```',
  },
  children: {
    questionSentence: MarkdownQuestionSentenceRule,
    radioButton: MarkdownRadioButtonRule,
    checkBox: MarkdownCheckBoxRule,
    textInput: MarkdownTextInputRule,
    textareaInput: MarkdownTextareaInputRule,
  },
};

export const MarkdownSectionRule: MarkdownRule = {
  id: 'section',
  regex: generateSingleSelectorMultilineRegex('\\*## '),
  selector: {
    start: '*## ',
    end: '\n',
  },
  children: {
    questionSingle: MarkdownQuestionSingleRule,
    questionGroup: MarkdownQuestionGroupRule,
  },
};

export const MarkdownGroupRule: MarkdownRule = {
  id: 'group',
  regex: generateSingleSelectorMultilineRegex('\\*# '),
  selector: {
    start: '*# ',
    end: '\n',
  },
  children: {
    section: MarkdownSectionRule,
    questionSingle: MarkdownQuestionSingleRule,
    questionGroup: MarkdownQuestionGroupRule,
  },
};

export const Markdown: MarkdownRules = {
  group: MarkdownGroupRule,
  questionSingle: MarkdownQuestionSingleRule,
  questionGroup: MarkdownQuestionGroupRule,
};

export const AllMarkdownRules: Record<
  MarkdownRuleType,
  MarkdownRule
> = {
  group: MarkdownGroupRule,
  section: MarkdownSectionRule,
  questionSingle: MarkdownQuestionSingleRule,
  questionGroup: MarkdownQuestionGroupRule,
  questionSentence: MarkdownQuestionSentenceRule,
  radioButton: MarkdownRadioButtonRule,
  checkBox: MarkdownCheckBoxRule,
  textInput: MarkdownTextInputRule,
  textareaInput: MarkdownTextareaInputRule,
  weight: MarkdownWeightRule,
};
