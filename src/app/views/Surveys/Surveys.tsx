import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { HeaderTitle } from 'app/shared/components/HeaderTitle/HeaderTitle';
import useLayoutStyles from 'app/shared/styles/layout.styles';

export const Surveys = (): ReactElement => {
  const intl = useIntl();
  const { root, content } = useLayoutStyles();

  return (
    <div className={root}>
      <HeaderTitle
        title={intl.formatMessage({
          id: 'SURVEYS.TITLE',
          defaultMessage: 'Surveys',
        })}
      />
      <Grid className={content} container spacing={2}>
        <Grid item xs={12}>
          TODO: Content
        </Grid>
      </Grid>
    </div>
  );
};
