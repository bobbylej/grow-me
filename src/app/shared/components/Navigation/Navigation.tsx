import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigationStyles } from 'app/shared/components/Navigation/Navigation.styles';
import { NavigationItem } from 'app/shared/interfaces/navigationItem.interface';

export interface NavigationParams {
  navigation: NavigationItem[];
}

export const Navigation = ({
  navigation,
}: NavigationParams): ReactElement => {
  const styles = useNavigationStyles();

  return (
    <List className={styles.navigation}>
      {navigation?.map((link) => (
        <NavLink
          exact
          to={link.route}
          key={link.route}
          className={styles.link}
        >
          <ListItem button>
            <ListItemText primary={link.text} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};
