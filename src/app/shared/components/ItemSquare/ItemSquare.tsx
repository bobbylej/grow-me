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
import { Color } from 'app/shared/types/color.type';
import { getSimplyColor } from 'app/shared/utils/color.utils';

export interface ItemSquareProps {
  square: SquareItem;
  color: Color;
  handleSquareClick: () => void;
}

export const ItemSquare = ({
  square,
  color,
  handleSquareClick,
}: ItemSquareProps): ReactElement => {
  const {
    itemSquareWrap,
    descriptionSquare,
    circleSurvey,
  } = useItemSquareStyles({ color });

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
        <Circle color={getSimplyColor(color)}>
          {getCircleText({
            total: square.badge.total,
            amount: square.badge.amount,
          })}
        </Circle>
      </div>
      <Card>
        <ItemSquareList color={color} square={square} />
        <CardContent className={descriptionSquare}>
          <Typography variant="body1">{square.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
