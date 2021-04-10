import { CardContent, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { SquareItem } from '../../interfaces/squareItem';
import { useItemSquareListStyles } from './ItemSquareList.styles';

export interface ItemSquareListParams {
  square: SquareItem;
}

export const ItemSquareList = ({
  square,
}: ItemSquareListParams): ReactElement => {
  const { itemSquare } = useItemSquareListStyles();

  return (
    <CardContent className={itemSquare} key={square.name}>
      <Typography variant="body1">
        {square.groupsNumber} {square.name}
      </Typography>
      <Typography variant="body1">
        {square.sectionsNumber} {square.name}
      </Typography>
      <Typography variant="body1">
        {square.questionsNumber} {square.name}
      </Typography>
    </CardContent>
  );
};
