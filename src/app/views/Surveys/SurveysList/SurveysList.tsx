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

  const itemsSquare: SquareItem[] = [
    {
      id: 'test1',
      name: 'test1',
      groupsNumber: 1,
      sectionsNumber: 1,
      questionsNumber: 1,
      badge: { total: 1, amount: 1 },
    },
    {
      id: 'test2',
      name: 'test2',
      groupsNumber: 2,
      sectionsNumber: 2,
      questionsNumber: 2,
      badge: { total: 2, amount: 2 },
    },
    {
      id: 'test3',
      name: 'test3',
      groupsNumber: 3,
      sectionsNumber: 3,
      questionsNumber: 3,
      badge: { total: 3, amount: 3 },
    },
    {
      id: 'test4',
      name: 'test4',
      groupsNumber: 4,
      sectionsNumber: 4,
      questionsNumber: 4,
      badge: { total: 4, amount: 4 },
    },
    {
      id: 'test5',
      name: 'test5',
      groupsNumber: 5,
      sectionsNumber: 5,
      questionsNumber: 5,
      badge: { total: 5, amount: 5 },
    },
  ];

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
      spacing={2}
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
