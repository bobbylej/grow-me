import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { pxToRem, defaultValues } from 'app/shared/utils/stylesUtils';

export const useQuestionGroupStyle = makeStyles((theme: Theme) => ({
  questionGroupContainer: {
    marginTop: pxToRem(50),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: defaultValues.borderRadius,
    '& div:nth-child(odd)': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));
