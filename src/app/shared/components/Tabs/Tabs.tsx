import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { useTabsStyles } from 'app/shared/components/Tabs/Tabs.styles';
import { Tab } from 'app/shared/interfaces/tab.interface';
import { SimplyColor } from 'app/shared/types/color.type';

export interface TabsProps {
  tabs: Tab[];
  color?: SimplyColor;
}

export const Tabs = ({
  tabs,
  color = 'primary',
}: TabsProps): React.ReactElement => {
  const { tabLink, tabButton, tabButtonActive } = useTabsStyles({
    color,
  });
  const location = useLocation();

  const tabsButtons = tabs.map((tab) => {
    const isTabActive = !!matchPath(tab.url, {
      path: location.pathname,
      exact: true,
    });

    return (
      <Button
        key={tab.id}
        className={`${tabButton} ${isTabActive && tabButtonActive}`}
      >
        <NavLink
          to={tab.url}
          className={`link--button ${tabLink}`}
          exact
        >
          {tab.name}
        </NavLink>
      </Button>
    );
  });

  return (
    <ButtonGroup
      color={color}
      size="small"
      aria-label="contained primary button group"
    >
      {tabsButtons}
    </ButtonGroup>
  );
};
