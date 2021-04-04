import { Grid, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { SquareItem } from '../../interfaces/squareItem';
import { useItemSquareListStyles } from './ItemSquareList.styles';

export interface ItemSquareListParams {
  square: SquareItem[];
}

export const ItemSquareList = ({
  square,
}: ItemSquareListParams): ReactElement => {
  const {
    itemSquare,
    itemSquareTemplate,
    itemSquareSurvay,
  } = useItemSquareListStyles();

  const items = square.map((item) => (
    <Grid
      className={
        itemSquare && (itemSquareTemplate || itemSquareSurvay)
      }
      key={item.id}
    >
      <Typography>
        {item.groupsNumber} {item.name}
      </Typography>
      <Typography>
        {item.sectionsNumber} {item.name}
      </Typography>
      <Typography>
        {item.questionsNumber} {item.name}
      </Typography>
    </Grid>
  ));

  return <div>{items}</div>;
};
