import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Fab, Grid } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { useFabStyles } from 'app/shared/styles/fab.styles';
import { FabContainer } from 'app/shared/components/FabContainer/FabContainer';

export const SurveysList = (): ReactElement => {
  const intl = useIntl();
  const { content } = useLayoutStyles();
  const { fab } = useFabStyles();
  const { url } = useRouteMatch();

  usePageTitle(
    intl.formatMessage({
      id: 'SURVEYS.TITLE',
      defaultMessage: 'Surveys',
    }),
  );

  return (
    <Grid className={content} container spacing={2}>
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
