import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useTabsStyles = makeStyles(
  (theme: Theme) => ({
    tabLink: {
      padding: theme.spacing(1, 2),
    },
    tabButton: {
      padding: 0,
    },
    tabButtonActive: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.dark,
      },
    },
  }),
  { name: 'Tabs' },
);
