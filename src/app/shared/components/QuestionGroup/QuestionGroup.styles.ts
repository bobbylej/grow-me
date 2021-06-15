import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { defaultValues } from 'app/shared/utils/styles.utils';
import { QuestionGroupProps } from 'app/shared/components/QuestionGroup/QuestionGroup';
import { getSimplyColor } from 'app/shared/utils/color.utils';

export const useQuestionGroupStyle = makeStyles((theme: Theme) => ({
  questionGroupContainer: ({ color }: QuestionGroupProps) => {
    const simplyColor = getSimplyColor(color);
    return {
      border: `1px solid ${theme.palette[simplyColor].main}`,
      borderRadius: defaultValues.borderRadius,
    };
  },
}));
