import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuestionItemStyles } from 'app/shared/components/QuestionItem/QuestionItem.styles';

export interface QuestionItemProps {
  text: string;
  variant: 'contained' | 'outlined';
}

export const QuestionItem = ({
  text,
  variant,
  children,
}: React.PropsWithChildren<QuestionItemProps>): React.ReactElement => {
  const {
    questionItemContainer,
    questionItemOdd,
    questionItemEven,
  } = useQuestionItemStyles();

  return (
    <Grid
      className={
        variant === 'contained'
          ? `${questionItemContainer} ${questionItemOdd}`
          : `${questionItemContainer} ${questionItemEven}`
      }
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
