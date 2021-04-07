import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { Circle } from '../Circle/Circle';
import { ItemSquareList } from '../ItemSquareList/ItemSquareList';
import { useItemSquareStyles } from './ItemSquare.styles';
import { SquareItem } from 'app/shared/interfaces/squareItem';

export interface ItemSquareProps {
  square: SquareItem;
  handleSquareClick: () => void;
}

export const ItemSquare = ({
  square,
  handleSquareClick,
}: ItemSquareProps): ReactElement => {
  const {
    itemSquareContainer,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    itemSquareTemplate,
    itemSquareSurvey,
  } = useItemSquareStyles();

  return (
    <div>
      <Grid spacing={2}>
        <Grid
          className={
            itemSquareContainer &&
            (itemSquareSurvey || itemSquareTemplate)
          }
          onClick={handleSquareClick}
        >
          <Circle />
          <ItemSquareList square={square} />
        </Grid>
        <Grid
          className={
            descriptionSquareTemplate || descriptionSquareSurvey
          }
        ></Grid>
      </Grid>
    </div>
  );
};
