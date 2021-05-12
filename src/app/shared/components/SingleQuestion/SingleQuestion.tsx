import React from 'react';
import { Grid } from '@material-ui/core';
import { useSingleQuestionStyles } from 'app/shared/components/SingleQuestion/SingleQuestion.styles';

export interface SingleQuestionProps {
  text: string | React.ReactNode;
}

export const SingleQuestion = ({
  text,
  children,
}: React.PropsWithChildren<SingleQuestionProps>): React.ReactElement => {
  const {
    questionContainer,
    question,
    content,
  } = useSingleQuestionStyles();

  return (
    <Grid className={questionContainer} container direction="column">
      <Grid item xs={12} className={question}>
        {text}
      </Grid>
      <Grid item xs={12} className={content}>
        {children}
      </Grid>
    </Grid>
  );
};
