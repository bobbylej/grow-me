import { makeStyles } from '@material-ui/styles';
import { pxToRem } from 'app/shared/utils/stylesUtils';

export const useQuestionItemStyles = makeStyles(() => ({
  questionItemContainer: {
    padding: pxToRem(5),
  },
}));
