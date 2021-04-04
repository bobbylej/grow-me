import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useItemSquareListStyles = makeStyles((theme: Theme) => ({
  itemSquare: {
    width: '100%',
  },
  itemSquareTemplate: {
    color: theme.palette.primary.main,
  },
  itemSquareSurvay: {
    color: theme.palette.secondary.main,
  },
}));
