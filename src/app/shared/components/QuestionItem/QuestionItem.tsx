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
    questionItemContained,
    questionItemOutlined,
  } = useQuestionItemStyles();

  return (
    <Grid
      className={
        variant === 'contained'
          ? `${questionItemContainer} ${questionItemContained}`
          : `${questionItemContainer} ${questionItemOutlined}`
      }
      container
      direction="row"
      item
      xs={12}
    >
      <Typography>{text}</Typography>
      <Grid item>{children}</Grid>
    </Grid>
  );
};
