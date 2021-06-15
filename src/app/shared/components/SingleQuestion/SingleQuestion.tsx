import React from 'react';
import { Grid } from '@material-ui/core';
import { useSingleQuestionStyles } from 'app/shared/components/SingleQuestion/SingleQuestion.styles';
import { Color } from 'app/shared/types/color.type';

export interface SingleQuestionProps {
  text: string | React.ReactNode;
  color?: Color;
}

export const SingleQuestion = ({
  text,
  color,
  children,
}: React.PropsWithChildren<SingleQuestionProps>): React.ReactElement => {
  const {
    questionContainer,
    question,
    content,
  } = useSingleQuestionStyles({ color });

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
