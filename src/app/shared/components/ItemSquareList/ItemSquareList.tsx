import { CardContent, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { SquareItem } from 'app/shared/interfaces/squareItem.interface';
import { useItemSquareListStyles } from 'app/shared/components/ItemSquareList/ItemSquareList.styles';
import { Color } from 'app/shared/types/color.type';

export interface ItemSquareListParams {
  square: SquareItem;
  color: Color;
}

export const ItemSquareList = ({
  square,
  color,
}: ItemSquareListParams): ReactElement => {
  const { itemSquare } = useItemSquareListStyles({ color });

  const intl = useIntl();

  return (
    <CardContent className={itemSquare} key={square.name}>
      <Typography variant="body1">
        {square.groupsNumber}{' '}
        {intl.formatMessage({
          id: 'GLOBAL.LABEL.GROUPS',
          defaultMessage: 'Groups',
        })}
      </Typography>
      <Typography variant="body1">
        {square.sectionsNumber}{' '}
        {intl.formatMessage({
          id: 'GLOBAL.LABEL.SECTIONS',
          defaultMessage: 'Sections',
        })}
      </Typography>
      <Typography variant="body1">
        {square.questionsNumber}{' '}
        {intl.formatMessage({
          id: 'GLOBAL.LABEL.QUESTIONS',
          defaultMessage: 'Questions',
        })}
      </Typography>
    </CardContent>
  );
};
