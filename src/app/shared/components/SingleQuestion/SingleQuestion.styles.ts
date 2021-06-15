import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import {
  defaultValues,
  getContrastBoxColor,
  getBoxColor,
} from 'app/shared/utils/styles.utils';
import { Color } from 'app/shared/types/color.type';

export const useSingleQuestionStyles = makeStyles((theme: Theme) => ({
  questionContainer: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: ({ color }: { color?: Color }) =>
      getBoxColor(theme, color),
    borderRadius: defaultValues.borderRadius,
  },
  question: {
    padding: theme.spacing(1, 2),
    color: ({ color }: { color?: Color }) =>
      getContrastBoxColor(theme, color),
    backgroundColor: ({ color }: { color?: Color }) =>
      getBoxColor(theme, color),
  },
  content: {
    padding: theme.spacing(1, 2),
  },
}));
