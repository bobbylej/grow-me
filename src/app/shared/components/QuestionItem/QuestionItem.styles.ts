import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useQuestionItemStyles = makeStyles((theme: Theme) => ({
  questionItemContainer: {
    padding: pxToRem(5),
  },
  questionItemContained: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  questionItemOutlined: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
  },
}));
