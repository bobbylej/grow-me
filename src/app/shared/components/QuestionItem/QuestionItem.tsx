import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuestionItemStyles } from 'app/shared/components/QuestionItem/QuestionItem.styles';
import { Color } from 'app/shared/types/color.type';

export interface QuestionItemProps {
  text: string;
  color?: Color;
  variant: 'contained' | 'outlined';
}

export const QuestionItem = ({
  text,
  color = 'primary',
  variant,
  children,
}: React.PropsWithChildren<QuestionItemProps>): React.ReactElement => {
  const { questionItemContainer } = useQuestionItemStyles({
    color,
    variant,
  });

  return (
    <Grid
      className={questionItemContainer}
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
