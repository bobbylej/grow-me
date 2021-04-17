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
  theme: 'survey' | 'template';
  handleSquareClick: () => void;
}

export const ItemSquare = ({
  square,
  theme,
  handleSquareClick,
}: ItemSquareProps): ReactElement => {
  const {
    itemSquareContainer,
    itemSquareWrap,
    descriptionSquareTemplate,
    descriptionSquareSurvey,
    circleSurvey,
  } = useItemSquareStyles();

  const getCircleText = (badge: {
    total: number;
    amount?: number;
  }): string => {
    const { amount, total } = badge;
    return amount ? `${amount}/${total}` : `${total}`;
  };

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
          xs={12}
          onClick={handleSquareClick}
        >
          <div className={circleSurvey}>
            <Circle
              theme="survey"
              text={getCircleText({
                total: 12,
                amount: 4,
              })}
            />
          </div>
          <Card>
            <ItemSquareList theme="survey" square={square} />
            <CardContent
              style={{ padding: '10px' }}
              className={
                theme === 'template'
                  ? descriptionSquareTemplate
                  : descriptionSquareSurvey
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
