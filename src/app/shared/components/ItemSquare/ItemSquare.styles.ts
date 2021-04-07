import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  itemSquareContainer: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
  },
  descriptionSquareTemplate: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
  descriptionSquareSurvey: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
  itemSquareTemplate: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  itemSquareSurvey: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}));
