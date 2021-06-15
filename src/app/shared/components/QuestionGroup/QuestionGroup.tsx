import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useQuestionGroupStyle } from 'app/shared/components/QuestionGroup/QuestionGroup.styles';
import { Color } from 'app/shared/types/color.type';

export interface QuestionGroupProps {
  color?: Color;
}

export const QuestionGroup = ({
  color = 'primary',
  children,
}: React.PropsWithChildren<QuestionGroupProps>): ReactElement => {
  const { questionGroupContainer } = useQuestionGroupStyle({ color });

  return (
    <Grid container className={questionGroupContainer}>
      {children}
    </Grid>
  );
};
