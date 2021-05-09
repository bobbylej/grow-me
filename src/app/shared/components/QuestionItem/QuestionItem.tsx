import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuestionItemStyles } from 'app/shared/components/QuestionItem/QuestionItem.styles';

export interface QuestionItemProps {
  text: string;
}

export const QuestionItem = ({
  text,
  children,
}: React.PropsWithChildren<QuestionItemProps>): React.ReactElement => {
  const { questionItemContainer } = useQuestionItemStyles();

  return (
    <Grid
      className={questionItemContainer}
      direction="row"
      item
      xs={12}
    >
      <Typography>{text}</Typography>
      <Grid item xs={6}>
        {children}
      </Grid>
    </Grid>
  );
};
