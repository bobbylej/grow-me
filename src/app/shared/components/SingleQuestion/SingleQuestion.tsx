import React from 'react';
import { Grid } from '@material-ui/core';
import { useSingleQuestionStyles } from 'app/shared/components/SingleQuestion/SingleQuestion.styles';

export interface SingleQuestionProps {
  text: string;
}

export const SingleQuestion = ({
  text,
  children,
}: React.PropsWithChildren<SingleQuestionProps>): React.ReactElement => {
  const { questionContainer, question } = useSingleQuestionStyles();

  return (
    <Grid className={questionContainer} container>
      <Grid className={question} direction="row" item xs={12}>
        {text}
        {children}
      </Grid>
      <Grid className={question} direction="row" item xs={12}>
        {text}
        {children}
      </Grid>
    </Grid>
  );
};
