import React, { useState } from 'react';
import {
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useIntl } from 'react-intl';
import logo from 'assets/images/logo.png';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { useHeaderTitleStyles } from 'app/shared/components/HeaderTitle/HeaderTitle.styles';
import { Navigation } from 'app/shared/components/Navigation/Navigation';
import { NavigationItem } from 'app/shared/interfaces/navigationItem.interface';

export interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
}: HeaderTitleProps) => {
  const intl = useIntl();
  const { content } = useLayoutStyles();
  const { header, headerIcon, headerItem } = useHeaderTitleStyles();
  const [open, setOpen] = useState(false);

  const navigation: NavigationItem[] = [
    {
      route: '/',
      text: intl.formatMessage({
        id: 'GLOBAL.NAVIGATION.PAGE_ONE',
        defaultMessage: 'Page one',
      }),
    },
    {
      route: '/surveys',
      text: intl.formatMessage({
        id: 'GLOBAL.NAVIGATION.SURVEYS',
        defaultMessage: 'Surveys',
      }),
    },
  ];

  const toggleDrawer = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <div className={header}>
      <Grid className={content} container spacing={2}>
        <Grid item className={headerItem}>
          <img src={logo} className={headerIcon} alt="logo" />
        </Grid>
        <Grid item className={headerItem}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item className={headerItem}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
      </Grid>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <Navigation navigation={navigation} />
      </Drawer>
    </div>
  );
};
