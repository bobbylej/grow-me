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
import { SquareItem } from 'app/shared/interfaces/squareItem.interface';

export interface ItemSquareProps {
  square: SquareItem;
  theme: 'survey' | 'template';
  handleSquareClick: () => void;
}

export const ItemSquare = ({
  square,
  theme,
  handleSquareClick,
}: ItemSquareProps): ReactElement => {
  const {
    itemSquareWrap,
    descriptionSquare,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    circleSurvey,
  } = useItemSquareStyles();

  const getCircleText = (badge: {
    total: number;
    amount?: number;
  }): string => {
    const { amount, total } = badge;
    return amount !== undefined ? `${amount}/${total}` : `${total}`;
  };

  return (
    <Grid
      className={itemSquareWrap}
      item
      xs={12}
      onClick={handleSquareClick}
    >
      <div className={circleSurvey}>
        <Circle theme="survey">
          {getCircleText({
            total: square.badge.total,
            amount: square.badge.amount,
          })}
        </Circle>
      </div>
      <Card>
        <ItemSquareList theme="survey" square={square} />
        <CardContent
          className={`${descriptionSquare} ${
            theme === 'template'
              ? descriptionSquareTemplate
              : descriptionSquareSurvey
          }`}
        >
          <Typography variant="body1">{square.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
