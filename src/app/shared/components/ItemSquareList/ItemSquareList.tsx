import { CardContent, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { SquareItem } from 'app/shared/interfaces/squareItem';
import { useItemSquareListStyles } from 'app/shared/components/ItemSquareList/ItemSquareList.styles';

export interface ItemSquareListParams {
  square: SquareItem;
  theme: 'survey' | 'template';
}

export const ItemSquareList = ({
  square,
  theme,
}: ItemSquareListParams): ReactElement => {
  const {
    itemSquare,
    itemSquareTemplate,
    itemSquareSurvey,
  } = useItemSquareListStyles();

  const intl = useIntl();

  return (
    <CardContent
      className={
        itemSquare && theme === 'template'
          ? itemSquareTemplate
          : itemSquareSurvey
      }
      key={square.name}
    >
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
