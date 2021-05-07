import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { pxToRem, defaultValues } from 'app/shared/utils/stylesUtils';

export const useSingleQuestionStyles = makeStyles((theme: Theme) => ({
  questionContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: defaultValues.borderRadius,
    '& div:nth-child(odd)': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
  },
  question: {
    padding: pxToRem(5),
  },
}));
