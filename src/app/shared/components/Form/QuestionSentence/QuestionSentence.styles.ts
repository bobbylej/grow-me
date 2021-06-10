import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { QuestionSentenceProps } from 'app/shared/components/Form/QuestionSentence/QuestionSentence';
import { Color } from 'app/shared/types/color.type';

export const useQuestionSentenceStyles = makeStyles(
  (theme: Theme) => {
    const getTextColor = (color?: Color) => {
      switch (color) {
        case 'primary':
        case 'primaryLight':
          return theme.palette.primary.contrastText;
        case 'secondary':
        case 'secondaryLight':
          return theme.palette.secondary.contrastText;
      }
      return theme.palette.primary.contrastText;
    };

    return {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
      },
      textInput: {
        color: ({ color }: Partial<QuestionSentenceProps>) =>
          getTextColor(color),
      },
    };
  },
);
