import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid direction="row" item xs={12}>
        <Grid xs={12} item>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
