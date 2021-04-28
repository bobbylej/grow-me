import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from 'app/shared/components/Circle/Circle.styles';

export interface CircleProps {
  text?: string;
  icon?: string;
  theme: 'survey' | 'template';
  circleParams?: 'active' | 'outlined' | 'covered';
  size?: 'small' | 'medium';
  className?: string;
}

export const Circle = ({
  text,
  icon,
  theme,
  circleParams,
  size,
  className,
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

  const getThemeClass = (theme: 'survey' | 'template'): string => {
    return theme === 'template' ? circleTemplate : circleSurvey;
  };

  const getCircleParamsClass = (
    circleParams?: 'active' | 'outlined' | 'covered',
  ): string => {
    switch (circleParams) {
      case 'active':
        return circleActive;
      case 'outlined':
        return circleOutlined;
      case 'covered':
        return circleCovered;
      default:
        return '';
    }
  };

  const getSizeClass = (size?: 'small' | 'medium'): string => {
    switch (size) {
      case 'small':
        return circleSmall;
      case 'medium':
        return circleMedium;
      default:
        return '';
    }
  };

  return (
    <div className={className}>
      <Avatar
        className={`${getThemeClass(theme)} ${getCircleParamsClass(
          circleParams,
        )} ${getSizeClass(size)}`}
      >
        {text || icon}
      </Avatar>
    </div>
  );
};
