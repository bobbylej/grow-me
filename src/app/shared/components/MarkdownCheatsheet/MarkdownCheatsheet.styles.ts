import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useMarkdownCheatsheetStyles = makeStyles(
  (theme: Theme) => ({
    markdownContent: {
      maxHeight: 'calc(80vh - 3rem)',
      overflowY: 'auto',
      padding: 0,
      fontSize: theme.typography.pxToRem(14),
    },
    markdownRow: {
      '&:last-child $markdownCell': {
        borderBottom: 0,
      },
    },
    markdownRuleRow: {
      '&:hover, &:active': {
        backgroundColor: theme.palette.grey[400],
      },
    },
    markdownCell: {
      padding: theme.spacing(1, 2),
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
    },
    markdownRuleDefaultValue: {
      fontStyle: 'italic',
    },
  }),
);
