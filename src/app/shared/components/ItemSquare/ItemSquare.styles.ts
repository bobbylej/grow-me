import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  itemSquareContainer: {
    // display: 'flex',
    width: '20%',
    // flexDirection: 'row',
    margin: '1rem',
    padding: '0.5rem',
  },
  itemSquareWrap: {
    position: 'relative',
  },
  descriptionSquareTemplate: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  descriptionSquareSurvey: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  itemSquareTemplate: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  itemSquareSurvey: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
  circleSurvey: {
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '1rem',
  },
}));