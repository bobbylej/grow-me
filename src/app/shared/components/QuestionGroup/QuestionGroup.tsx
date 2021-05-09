import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { QuestionItem } from 'app/shared/components/QuestionItem/QuestionItem';
import { useQuestionGroupStyle } from 'app/shared/components/QuestionGroup/QuestionGroup.styles';

export const QuestionGroup = (): ReactElement => {
  const { questionGroupContainer } = useQuestionGroupStyle();

  return (
    <Grid container className={questionGroupContainer}>
      <QuestionItem text="test 1" />
      <QuestionItem text="test 2" />
      <QuestionItem text="test 3" />
      <QuestionItem text="test 4" />
    </Grid>
  );
};
