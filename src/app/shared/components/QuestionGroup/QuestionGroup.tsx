import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useQuestionGroupStyle } from 'app/shared/components/QuestionGroup/QuestionGroup.styles';

export const QuestionGroup = ({
  children,
}: {
  children?: React.ReactNode;
}): ReactElement => {
  const { questionGroupContainer } = useQuestionGroupStyle();

  return (
    <Grid container className={questionGroupContainer}>
      {children}
    </Grid>
  );
};
