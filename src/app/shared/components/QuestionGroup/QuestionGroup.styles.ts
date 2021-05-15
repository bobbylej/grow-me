import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { defaultValues } from 'app/shared/utils/stylesUtils';

export const useQuestionGroupStyle = makeStyles((theme: Theme) => ({
  questionGroupContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: defaultValues.borderRadius,
  },
}));
