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
      <Grid direction="row" item xs={12}>
        <Typography className={question} variant="body1">
          {text}
        </Typography>
        <Grid xs={6} item>
          {children}
        </Grid>
      </Grid>
      <Grid direction="row" item xs={12}>
        <Typography className={question} variant="body1">
          {text}
        </Typography>
        <Grid xs={6} item>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
