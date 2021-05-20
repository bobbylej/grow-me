import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { defaultValues } from 'app/shared/utils/styles.utils';

export const useSingleQuestionStyles = makeStyles((theme: Theme) => ({
  questionContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: defaultValues.borderRadius,
  },
  question: {
    padding: theme.spacing(1, 2),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    padding: theme.spacing(1, 2),
  },
}));
