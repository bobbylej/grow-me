import { Grid, Link } from '@material-ui/core';
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
          <Link>
            {intl.formatMessage({
              id: 'GLOBAL.NAVIGATION.HOME',
              defaultMessage: 'Home',
            })}
          </Link>
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink to="/page-one">
          <Link color="secondary">
            {intl.formatMessage({
              id: 'GLOBAL.NAVIGATION.PAGE_ONE',
              defaultMessage: 'Page one',
            })}
          </Link>
        </NavLink>
      </Grid>
    </Grid>
  );
};
