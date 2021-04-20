import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useCircleStyles = makeStyles((theme: Theme) => ({
  circleSurvey: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    fontSize: '1rem',
  },
  circleTemplate: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    fontSize: '1rem',
  },
}));
