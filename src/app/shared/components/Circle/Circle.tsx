import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from 'app/shared/components/Circle/Circle.styles';

export interface CircleProps {
  text?: string;
  icon?: string;
  theme: 'survey' | 'template';
  circleParmas?: 'active' | 'outlined' | 'covered';
  size?: 'small' | 'medium';
}

export const Circle = ({
  text,
  icon,
  theme,
  circleParmas,
  size,
}: CircleProps): ReactElement => {
  const {
    circleSurvey,
    circleTemplate,
    circleActive,
    circleOutlined,
    circleCovered,
    circleSmall,
    circleMedium,
  } = useCircleStyles();

  return (
    <div>
      <Avatar
        className={`${
          theme === 'template' ? circleTemplate : circleSurvey
        } ${circleParmas === 'active' ? circleActive : ''} ${
          circleParmas === 'outlined' ? circleOutlined : ''
        } ${circleParmas === 'covered' ? circleCovered : ''} ${
          size === 'small' ? circleSmall : ''
        } ${size === 'medium' ? circleMedium : ''}`}
      >
        {text || icon}
      </Avatar>
    </div>
  );
};
