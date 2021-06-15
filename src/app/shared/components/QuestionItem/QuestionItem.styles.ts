import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { QuestionItemProps } from 'app/shared/components/QuestionItem/QuestionItem';
import {
  getBoxColor,
  getContrastBoxColor,
  pxToRem,
} from 'app/shared/utils/styles.utils';

export const useQuestionItemStyles = makeStyles((theme: Theme) => ({
  questionItemContainer: ({
    color,
    variant,
  }: Partial<QuestionItemProps>) => ({
    display: 'flex',
    padding: pxToRem(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: getBoxColor(theme, color, variant),
    color: getContrastBoxColor(theme, color, variant),
  }),
}));
