import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useItemSquareStyles } from './ItemSquare.styles';

export interface ItemSquareProps {
  id: string;
  name: string;
  badge: { total: number; amount?: number };
  handleSquareClick: () => { return: string };
}

export const ItemSquare = ({
  id,
  name,
  badge,
  handleSquareClick,
}: ItemSquareProps): ReactElement => {
  const {
    squareContainer,
    itemSquareContainer,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    itemSquareTemplate,
    itemSquareSurvey,
  } = useItemSquareStyles();

  return (
    <div>
      <Grid className={squareContainer}>
        <Grid
          className={
            itemSquareContainer &&
            (itemSquareSurvey || itemSquareTemplate)
          }
          onClick={handleSquareClick}
        ></Grid>
        <Grid
          className={
            descriptionSquareTemplate || descriptionSquareSurvey
          }
        >
          {name}
        </Grid>
      </Grid>
    </div>
  );
};
