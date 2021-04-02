import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import useLayoutStyles from 'app/shared/styles/layout.styles';

export const Links = (): ReactElement => {
  const intl = useIntl();
  const { content } = useLayoutStyles();

  return (
    <Grid container className={content} spacing={2}>
      <Grid item>
        <NavLink exact={true} to="/">
          {intl.formatMessage({
            id: 'GLOBAL.NAVIGATION.HOME',
            defaultMessage: 'Home',
          })}
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to="/page-one">
          {intl.formatMessage({
            id: 'GLOBAL.NAVIGATION.PAGE_ONE',
            defaultMessage: 'Page one',
          })}
        </NavLink>
      </Grid>
    </Grid>
  );
};
