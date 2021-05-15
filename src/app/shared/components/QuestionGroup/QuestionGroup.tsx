import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { QuestionItem } from 'app/shared/components/QuestionItem/QuestionItem';
import { useQuestionGroupStyle } from 'app/shared/components/QuestionGroup/QuestionGroup.styles';

export const QuestionGroup = (): ReactElement => {
  const { questionGroupContainer } = useQuestionGroupStyle();

  return (
    <Grid container className={questionGroupContainer}>
      <QuestionItem variant="outlined" text="test 1" />
      <QuestionItem variant="contained" text="test 2" />
      <QuestionItem variant="outlined" text="test 3" />
      <QuestionItem variant="contained" text="test 4" />
    </Grid>
  );
};
