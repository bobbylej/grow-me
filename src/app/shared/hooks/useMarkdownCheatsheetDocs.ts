import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import {
  MarkdownCheckBoxRule,
  MarkdownGroupRule,
  MarkdownQuestionGroupRule,
  MarkdownQuestionSentenceRule,
  MarkdownQuestionSingleRule,
  MarkdownRadioButtonRule,
  MarkdownSectionRule,
  MarkdownTextareaInputRule,
  MarkdownTextInputRule,
  MarkdownWeightRule,
} from 'app/shared/constants/markdown';
import { MarkdownRuleDocumentation } from 'app/shared/interfaces/markdownRule.interface';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export const useMarkdownCheatsheetDocs = (): Partial<
  Record<MarkdownRuleType, MarkdownRuleDocumentation>
> => {
  const intl = useIntl();

  const weigthRuleDefaultValue = useMemo(
    () =>
      intl.formatMessage({
        id: 'GLOBAL.MARKDOWN.WEIGHT.DEFAULT_VALUE',
        defaultMessage: 'Default value: 1',
      }),
    [intl],
  );

  const questionChildren = useMemo(
    () => ({
      questionSentence: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SENTENCE.NAME',
          defaultMessage: 'Question sentence',
        }),
        syntax: `${
          MarkdownQuestionSentenceRule.selector.start
        } ${intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SENTENCE.NAME',
          defaultMessage: 'Question sentence',
        })}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SENTENCE.DESCRIPTION',
          defaultMessage:
            'It creates a question with specified sentence',
        }),
        children: {
          weight: {
            name: intl.formatMessage({
              id: 'GLOBAL.MARKDOWN.QUESTION_SENTENCE_WEIGHT.NAME',
              defaultMessage: 'Question sentence - Weight',
            }),
            syntax: `${MarkdownQuestionSentenceRule.selector.start}${
              MarkdownWeightRule.selector.start
            }1${MarkdownWeightRule.selector.end} ${intl.formatMessage(
              {
                id: 'GLOBAL.MARKDOWN.QUESTION_SENTENCE.NAME',
                defaultMessage: 'Question sentence',
              },
            )}`,
            defaultValue: weigthRuleDefaultValue,
            description: intl.formatMessage({
              id:
                'GLOBAL.MARKDOWN.QUESTION_SENTENCE_WEIGHT.DESCRIPTION',
              defaultMessage: 'It sets the weight of the question',
            }),
          },
        },
      },
      radioButton: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.RADIO_BUTTON.NAME',
          defaultMessage: 'Radio button',
        }),
        syntax: `${
          MarkdownRadioButtonRule.selector.start
        } ${intl.formatMessage({
          id: 'GLOBAL.LABEL.LABEL',
          defaultMessage: 'Label',
        })}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.RADIO_BUTTON.DESCRIPTION',
          defaultMessage:
            'It creates a radio button form control with specified label',
        }),
        children: {
          weight: {
            name: intl.formatMessage({
              id: 'GLOBAL.MARKDOWN.RADIO_BUTTON_WEIGHT.NAME',
              defaultMessage: 'Radio button - Weight',
            }),
            syntax: `${MarkdownRadioButtonRule.selector.start}${
              MarkdownWeightRule.selector.start
            }1${MarkdownWeightRule.selector.end} ${intl.formatMessage(
              {
                id: 'GLOBAL.LABEL.LABEL',
                defaultMessage: 'Label',
              },
            )}`,
            defaultValue: weigthRuleDefaultValue,
            description: intl.formatMessage({
              id: 'GLOBAL.MARKDOWN.RADIO_BUTTON_WEIGHT.DESCRIPTION',
              defaultMessage:
                'It sets the weight of radio button form control',
            }),
          },
        },
      },
      checkBox: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.CHECK_BOX.NAME',
          defaultMessage: 'Check box',
        }),
        syntax: `${
          MarkdownCheckBoxRule.selector.start
        } ${intl.formatMessage({
          id: 'GLOBAL.LABEL.LABEL',
          defaultMessage: 'Label',
        })}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.CHECK_BOX.DESCRIPTION',
          defaultMessage:
            'It creates a check box form control with specified label',
        }),
        children: {
          weight: {
            name: intl.formatMessage({
              id: 'GLOBAL.MARKDOWN.CHECK_BOX_WEIGHT.NAME',
              defaultMessage: 'Check box - Weight',
            }),
            syntax: `${MarkdownCheckBoxRule.selector.start}${
              MarkdownWeightRule.selector.start
            }1${MarkdownWeightRule.selector.end} ${intl.formatMessage(
              {
                id: 'GLOBAL.LABEL.LABEL',
                defaultMessage: 'Label',
              },
            )}`,
            defaultValue: weigthRuleDefaultValue,
            description: intl.formatMessage({
              id: 'GLOBAL.MARKDOWN.CHECK_BOX_WEIGHT.DESCRIPTION',
              defaultMessage:
                'It sets the weight of check box form control',
            }),
          },
        },
      },
      textInput: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.TEXT_INPUT.NAME',
          defaultMessage: 'Text input',
        }),
        syntax: `${MarkdownTextInputRule.selector.start}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.TEXT_INPUT.DESCRIPTION',
          defaultMessage: 'It creates a text input form control',
        }),
      },
      textareaInput: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.TEXT_AREA_INPUT.NAME',
          defaultMessage: 'Text area input',
        }),
        syntax: `${MarkdownTextareaInputRule.selector.start}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.TEXT_AREA_INPUT.DESCRIPTION',
          defaultMessage: 'It creates a text area input form control',
        }),
      },
    }),
    [intl, weigthRuleDefaultValue],
  );

  return useMemo(
    () => ({
      group: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.GROUP.NAME',
          defaultMessage: 'Group',
        }),
        syntax: `${
          MarkdownGroupRule.selector.start
        } ${intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.GROUP.NAME',
          defaultMessage: 'Group',
        })}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.GROUP.DESCRIPTION',
          defaultMessage:
            'It creates a group of sections specified name in a form',
        }),
      },
      section: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.SECTION.NAME',
          defaultMessage: 'Section',
        }),
        syntax: `${
          MarkdownSectionRule.selector.start
        } ${intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.SECTION.NAME',
          defaultMessage: 'Section',
        })}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.SECTION.DESCRIPTION',
          defaultMessage:
            'It creates a section with specified name in a form',
        }),
      },
      questionSingle: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SINGLE.NAME',
          defaultMessage: 'Question',
        }),
        syntax: `${MarkdownQuestionSingleRule.selector.start} 
        ${intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SINGLE.CONTENT',
          defaultMessage: "Question's content",
        })}
        ${MarkdownQuestionSingleRule.selector.end}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_SINGLE.DESCRIPTION',
          defaultMessage:
            'It creates a single question with specified content inside',
        }),
        children: questionChildren,
      },
      questionGroup: {
        name: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_GROUP.NAME',
          defaultMessage: "Question's Group",
        }),
        syntax: `${
          MarkdownQuestionGroupRule.selector.start
        }\n${intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_GROUP.CONTENT',
          defaultMessage: 'Multiple questions with content',
        })}\n${MarkdownQuestionGroupRule.selector.end}`,
        description: intl.formatMessage({
          id: 'GLOBAL.MARKDOWN.QUESTION_GROUP.DESCRIPTION',
          defaultMessage:
            'It creates a group of questions with specified content inside',
        }),
        children: questionChildren,
      },
    }),
    [intl, questionChildren],
  );
};
