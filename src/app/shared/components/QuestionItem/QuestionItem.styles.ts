import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/styles.utils';

export const useQuestionItemStyles = makeStyles((theme: Theme) => ({
  questionItemContainer: {
    display: 'flex',
    padding: pxToRem(5),
    justifyContent: 'space-between',
    alignItems: 'center',
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
