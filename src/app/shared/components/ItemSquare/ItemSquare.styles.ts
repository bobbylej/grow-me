import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/styles.utils';

export const useItemSquareStyles = makeStyles((theme: Theme) => ({
  itemSquareWrap: {
    position: 'relative',
  },
  descriptionSquare: {
    padding: theme.spacing(1, 2),

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
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
    top: pxToRem(-10),
    right: pxToRem(-10),
    fontSize: '1rem',
  },
}));
