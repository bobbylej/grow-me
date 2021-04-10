import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useItemSquareListStyles = makeStyles((theme: Theme) => ({
  itemSquare: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));
