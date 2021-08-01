import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useSurveyFormStyles = makeStyles((theme: Theme) => ({
  surveyContainer: {
    marginTop: theme.spacing(4),
  },
  surveySection: {
    marginTop: theme.spacing(2),

    '&:first-child': {
      marginTop: 0,
    },
  },
  surveyButtons: {
    textAlign: 'right',
  },
}));
