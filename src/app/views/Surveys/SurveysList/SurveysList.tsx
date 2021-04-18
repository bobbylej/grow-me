import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Fab, Grid } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { ItemSquare } from 'app/shared/components/ItemSquare/ItemSquare';
import { SquareItem } from 'app/shared/interfaces/squareItem';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { useFabStyles } from 'app/shared/styles/fab.styles';
import { FabContainer } from 'app/shared/components/FabContainer/FabContainer';

export const SurveysList = (): ReactElement => {
  const intl = useIntl();
  const { content, listContainer } = useLayoutStyles();
  const { fab } = useFabStyles();
  const { url } = useRouteMatch();

  usePageTitle(
    intl.formatMessage({
      id: 'SURVEYS.TITLE',
      defaultMessage: 'Surveys',
    }),
  );

  const itemsSquare: SquareItem[] = new Array(10)
    .fill({})
    .map((item, index) => ({
      id: `test${index}`,
      name: `Test ${index}`,
      groupsNumber: index,
      sectionsNumber: index,
      questionsNumber: index,
      badge: {
        total: index,
        amount: Math.floor(Math.random() * index),
      },
    }));

  const handleSquareClick = () => {
    console.log('item clicked');
  };

  const itemsSquareList = itemsSquare.map((item) => (
    <Grid item xs={2} key={item.id}>
      <ItemSquare
        theme="survey"
        square={item}
        handleSquareClick={handleSquareClick}
      />
    </Grid>
  ));

  return (
    <Grid
      className={`${content} ${listContainer}`}
      container
      spacing={3}
    >
      {itemsSquareList}
      <Grid item xs={12}>
        <FabContainer>
          <Link className={`link--button ${fab}`} to={`${url}/new`}>
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </FabContainer>
      </Grid>
    </Grid>
  );
};
