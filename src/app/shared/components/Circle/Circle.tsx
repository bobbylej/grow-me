import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from './Circle.styles';

export interface CircleProps {
  text?: string;
  icon?: string;
  theme: 'survey' | 'template';
}

export const Circle = ({
  text,
  icon,
  theme,
}: CircleProps): ReactElement => {
  const { circleSurvey, circleTemplate } = useCircleStyles();

  return (
    <div>
      <Avatar
        className={
          theme === 'template' ? circleTemplate : circleSurvey
        }
      >
        {text || icon}
      </Avatar>
    </div>
  );
};
