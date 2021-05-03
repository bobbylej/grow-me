import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useSurveyGraphicEditorStyles = makeStyles(
  (theme: Theme) => ({
    form: {
      '& > *': {
        margin: theme.spacing(1, 0),
      },
      '& > *:first-child': {
        marginTop: 0,
      },
      '& > *:last-child': {
        marginBottom: 0,
      },
    },
  }),
);
