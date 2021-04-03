import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';

export const Surveys = (): ReactElement => {
  const intl = useIntl();
  const { content } = useLayoutStyles();

  usePageTitle(
    intl.formatMessage({
      id: 'SURVEYS.TITLE',
      defaultMessage: 'Surveys',
    }),
  );

  return (
    <Grid className={content} container spacing={2}>
      <Grid item xs={12}>
        TODO: Content
      </Grid>
    </Grid>
  );
};
