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
    itemsSquereContainer,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    itemSquereTemplate,
    itemSquereSurvey,
  } = useItemSquareStyles();

  return (
    <div>
      <Grid className={squareContainer}>
        <Grid
          id={id}
          className={
            itemsSquereContainer &&
            (itemSquereSurvey || itemSquereTemplate)
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
