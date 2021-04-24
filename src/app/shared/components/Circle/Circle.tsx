import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from 'app/shared/components/Circle/Circle.styles';

export interface CircleProps {
  text?: string;
  icon?: string;
  theme: 'survey' | 'template';
  circleParmas?: 'active';
}

export const Circle = ({
  text,
  icon,
  theme,
  circleParmas,
}: CircleProps): ReactElement => {
  const {
    circleSurvey,
    circleTemplate,
    circleActive,
    circleInActive,
  } = useCircleStyles();

  return (
    <div>
      <Avatar
        className={
          (theme === 'template' ? circleTemplate : circleSurvey) ||
          (circleParmas === 'active' ? circleActive : circleInActive)
        }
      >
        {text || icon}
      </Avatar>
    </div>
  );
};
