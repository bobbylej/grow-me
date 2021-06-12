import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SimplyColor } from 'app/shared/types/color.type';

export const useTabsStyles = makeStyles(
  (theme: Theme) => ({
    tabLink: {
      padding: theme.spacing(1, 2),
    },
    tabButton: {
      padding: 0,
    },
    tabButtonActive: ({ color }: { color: SimplyColor }) => ({
      backgroundColor: theme.palette[color].main,
      color: theme.palette[color].contrastText,

      '&:hover': {
        backgroundColor: theme.palette[color].dark,
        color: theme.palette[color].contrastText,
        borderColor: theme.palette[color].dark,
      },
    }),
  }),
  { name: 'Tabs' },
);
