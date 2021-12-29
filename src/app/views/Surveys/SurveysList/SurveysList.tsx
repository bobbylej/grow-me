import { useIntl } from 'react-intl';
import React, { ReactElement, useEffect, useState } from 'react';
import { Fab, Grid } from '@material-ui/core';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { ItemSquare } from 'app/shared/components/ItemSquare/ItemSquare';
import { SquareItem } from 'app/shared/interfaces/squareItem.interface';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { useFabStyles } from 'app/shared/styles/fab.styles';
import { FabContainer } from 'app/shared/components/FabContainer/FabContainer';
import { getSurveys } from 'app/shared/api/services/surveys.service';

import { Survey } from 'app/shared/interfaces/survey.interface';

export const SurveysList = (): ReactElement => {
  const intl = useIntl();
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const { content, listContainer } = useLayoutStyles();
  const { fab } = useFabStyles();
  const history = useHistory();
  const { url } = useRouteMatch();

  usePageTitle(
    intl.formatMessage({
      id: 'SURVEYS.TITLE',
      defaultMessage: 'Surveys',
    }),
  );

  useEffect(() => {
    getSurveys().then((surveys) => {
      setSurveys(surveys);
    });
  }, []);

  const itemsSquare: SquareItem[] = surveys.map((survey) => ({
    id: survey.id,
    name: survey.title,
    groupsNumber: survey.counter?.groups ?? 0,
    sectionsNumber: survey.counter?.sections ?? 0,
    questionsNumber: survey.counter?.questions ?? 0,
    badge: {
      total: survey.statistics?.sent ?? 0,
      amount: survey.statistics?.filled ?? 0,
    },
  }));

  const handleSquareClick = (item: SquareItem): void => {
    history.push(`${url}/${item.id}`);
  };

  const itemsSquareList = itemsSquare.map((item) => (
    <Grid item xs={2} key={item.id}>
      <ItemSquare
        color="primary"
        square={item}
        handleSquareClick={() => handleSquareClick(item)}
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
