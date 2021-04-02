import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const usePageOneStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    padding: '5rem 0',
  },
  items: {
    marginTop: '1rem',
  },
}));
