import React from 'react';
import { Grid } from '@material-ui/core';
import { Color } from 'app/shared/types/color.type';
import { useLabelAnswerStyles } from 'app/shared/components/LabelAnswer/LabelAnswer.styles';

export interface LabelAnswerProps {
  labels: string[];
  color: Color;
}

export const LabelAnswer = ({
  labels,
  color,
}: LabelAnswerProps): React.ReactElement => {
  const { labelContainer, labelWrapper } = useLabelAnswerStyles();

  const labelsAnswers = labels.map((label) => (
    <Grid className={labelWrapper} key={label} color={color}>
      {label}
    </Grid>
  ));

  return <Grid className={labelContainer}>{labelsAnswers}</Grid>;
};
