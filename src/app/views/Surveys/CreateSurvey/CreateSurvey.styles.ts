import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useCreateSurveyStyles = makeStyles((theme: Theme) => ({
  header: {
    marginTop: theme.spacing(4),
  },
}));
