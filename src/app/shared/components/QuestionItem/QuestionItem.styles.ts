import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useQuestionItemStyles = makeStyles((theme: Theme) => ({
  questionItemContainer: {
    padding: pxToRem(5),
  },
  questionItemOdd: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  questionItemEven: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
  },
}));
