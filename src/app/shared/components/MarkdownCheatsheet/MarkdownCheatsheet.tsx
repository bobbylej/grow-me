import React from 'react';
import { useIntl } from 'react-intl';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { useMarkdownCheatsheetDocs } from 'app/shared/hooks/useMarkdownCheatsheetDocs';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { MarkdownRuleDocumentation } from 'app/shared/interfaces/markdownRule.interface';
import { useMarkdownCheatsheetStyles } from 'app/shared/components/MarkdownCheatsheet/MarkdownCheatsheet.styles';
import { removeBlankLines } from 'app/shared/utils/text.utils';
import { Color } from 'app/shared/types/color.type';

export interface MarkdownCheatsheetProps {
  color?: Color;
}

const generateMarkdownRuleKey = (
  markdownRuleKey: string,
  parentKey?: string,
): string => {
  return `${parentKey ? `${parentKey}-` : ''}${markdownRuleKey}`;
};

export const MarkdownCheatsheet = ({
  color = 'primary',
}: MarkdownCheatsheetProps): React.ReactElement => {
  const intl = useIntl();
  const styles = useMarkdownCheatsheetStyles();
  const markdownCheatsheetDocs = useMarkdownCheatsheetDocs();

  const getMarkdownRuleElement = (
    key: MarkdownRuleType,
    markdownRule: MarkdownRuleDocumentation,
    nestLevel = 0,
    parentKey?: string,
  ): React.ReactNode => {
    return (
      <tr
        key={generateMarkdownRuleKey(key, parentKey)}
        className={`${styles.markdownRow} ${styles.markdownRuleRow}`}
      >
        <td className={styles.markdownCell}>
          <span
            className="code"
            style={{ paddingLeft: `${nestLevel}rem` }}
          >
            {removeBlankLines(markdownRule.syntax)}
          </span>
        </td>
        <td className={styles.markdownCell}>
          {markdownRule.description}.&nbsp;
          {markdownRule.defaultValue && (
            <span className={styles.markdownRuleDefaultValue}>
              ({markdownRule.defaultValue})
            </span>
          )}
        </td>
      </tr>
    );
  };

  const getMarkdownRulesElement = (
    markdownRules: Partial<
      Record<MarkdownRuleType, MarkdownRuleDocumentation>
    >,
    nestLevel = 0,
    parentKey?: string,
  ): React.ReactNode =>
    Object.entries<MarkdownRuleDocumentation>(markdownRules).map(
      ([key, markdownRule]) =>
        markdownRule && (
          <React.Fragment
            key={`${generateMarkdownRuleKey(key, parentKey)}-rules`}
          >
            {getMarkdownRuleElement(
              key as MarkdownRuleType,
              markdownRule,
              nestLevel,
              parentKey,
            )}
            {markdownRule.children &&
              getMarkdownRulesElement(
                markdownRule.children,
                nestLevel + 1,
                generateMarkdownRuleKey(key, parentKey),
              )}
          </React.Fragment>
        ),
    );

  return (
    <FormBox
      title={intl.formatMessage({
        id: 'GLOBAL.LABEL.MARKDOWN_CHEATSHEET',
        defaultMessage: 'Markdown Cheatsheet',
      })}
      color={color}
      size="small"
      contentVariant="contained"
      contentClassName={styles.markdownContent}
    >
      <table>
        <tbody>
          {getMarkdownRulesElement(markdownCheatsheetDocs)}
        </tbody>
      </table>
    </FormBox>
  );
};
