import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useItemSquareListStyles = makeStyles((theme: Theme) => ({
  itemSquare: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },
  itemSquareTemplate: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  itemSquareSurvey: {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));
