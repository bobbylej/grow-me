import React, { ReactElement } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
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
    itemSquareWrap,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    circleSurvey,
  } = useItemSquareStyles();

  return (
    <>
      <Grid
        className={itemSquareContainer}
        container
        spacing={2}
        direction="row"
      >
        <Grid
          className={itemSquareWrap}
          item
          xs={2}
          onClick={handleSquareClick}
        >
          <div className={circleSurvey}>
            <Circle />
          </div>
          <Card>
            <ItemSquareList square={square} />
            <CardContent
              className={
                descriptionSquareTemplate || descriptionSquareSurvey
              }
            >
              <Typography variant="body1">{square.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
