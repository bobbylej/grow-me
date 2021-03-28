import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { useHeaderTitleStyles } from 'app/shared/components/HeaderTitle/HeaderTitle.styles';

export interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = ({
  title,
}: HeaderTitleProps): ReactElement => {
  const { content } = useLayoutStyles();
  const { header, headerIcon } = useHeaderTitleStyles();

  return (
    <div className={header}>
      <Grid className={content} container spacing={2}>
        <Grid item>
          <img src={logo} className={headerIcon} alt="logo" />
        </Grid>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
