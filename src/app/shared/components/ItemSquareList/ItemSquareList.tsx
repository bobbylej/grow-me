import { Grid, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { SquareItem } from '../../interfaces/squareItem';
import { useItemSquareListStyles } from './ItemSquareList.styles';

export interface ItemSquareListParams {
  square: SquareItem;
}

export const ItemSquareList = ({
  square,
}: ItemSquareListParams): ReactElement => {
  const {
    itemSquare,
    itemSquareTemplate,
    itemSquareSurvay,
  } = useItemSquareListStyles();

  return (
    <Grid
      className={
        itemSquare && (itemSquareTemplate || itemSquareSurvay)
      }
      key={square.name}
    >
      <Typography>
        {square.groupsNumber} {square.name}
      </Typography>
      <Typography>
        {square.sectionsNumber} {square.name}
      </Typography>
      <Typography>
        {square.questionsNumber} {square.name}
      </Typography>
    </Grid>
  );
};
