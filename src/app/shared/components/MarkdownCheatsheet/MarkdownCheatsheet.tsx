import React from 'react';
import { useIntl } from 'react-intl';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { FormBox } from 'app/shared/components/Form/FormBox/FormBox';
import { useMarkdownCheatsheetDocs } from 'app/shared/hooks/useMarkdownCheatsheetDocs';
import { Markdown } from 'app/shared/constants/markdown';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';
import { MarkdownRule } from 'app/shared/interfaces/markdownRule.interface';

export const MarkdownCheatsheet = (): React.ReactElement => {
  const intl = useIntl();
  const markdownCheatsheetDocs = useMarkdownCheatsheetDocs();

  const getMarkdownRuleElement = (
    markdownRule: MarkdownRule,
    parent?: MarkdownRule,
  ): React.ReactNode => {
    const markdownRuleDocs = markdownCheatsheetDocs[markdownRule.id];

    return (
      <TableRow key={markdownRule.id}>
        <TableCell>
          <span className="code">{markdownRuleDocs.syntax}</span>
        </TableCell>
        <TableCell align="right">
          {markdownRuleDocs.description}
        </TableCell>
      </TableRow>
    );
  };

  const getMarkdownRulesElement = (
    markdownRules: Partial<Record<MarkdownRuleType, MarkdownRule>>,
    parent?: MarkdownRule,
  ): React.ReactNode =>
    Object.values(markdownRules).map(
      (markdownRule) =>
        markdownRule && (
          <React.Fragment>
            {getMarkdownRuleElement(markdownRule, parent)}
            {markdownRule.children &&
              getMarkdownRulesElement(
                markdownRule.children,
                markdownRule,
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
      size="small"
      contentVariant="contained"
    >
      <Table size="small" padding="none">
        <TableHead>
          <TableRow>
            <TableCell>
              {intl.formatMessage({
                id: 'GLOBAL.LABEL.MARKDOWN_SYNTAX',
                defaultMessage: 'Markdown syntax',
              })}
            </TableCell>
            <TableCell align="right">
              {intl.formatMessage({
                id: 'GLOBAL.LABEL.DESCRIPTION',
                defaultMessage: 'Description',
              })}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getMarkdownRulesElement(Markdown)}</TableBody>
      </Table>
    </FormBox>
  );
};
