import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from 'app/shared/components/Circle/Circle.styles';
import { Size } from 'app/shared/types/size.type';
import { SimplyColor } from 'app/shared/types/color.type';

export interface CircleProps {
  color?: SimplyColor;
  circleParams?: 'active' | 'outlined' | 'covered';
  size?: Size;
  className?: string;
}

export const Circle = ({
  color = 'primary',
  circleParams,
  size = 'medium',
  className,
  children,
}: React.PropsWithChildren<CircleProps>): ReactElement => {
  const {
    circle,
    circleActive,
    circleOutlined,
    circleCovered,
  } = useCircleStyles({ color, size });

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

  return (
    <Avatar
      className={`${circle} ${getCircleParamsClass(circleParams)} ${
        className ? className : ''
      }`}
    >
      {children || ' '}
    </Avatar>
  );
};
