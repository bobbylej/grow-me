import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from 'app/shared/components/Circle/Circle.styles';
import { Size } from 'app/shared/types/size.type';
import { SimplyColor } from 'app/shared/types/color.type';
import { CircleVariant } from 'app/shared/types/circleVariant.type';

export interface CircleProps {
  color?: SimplyColor;
  variant?: CircleVariant;
  size?: Size;
  className?: string;
}

export const Circle = ({
  color = 'primary',
  variant,
  size = 'medium',
  className,
  children,
}: React.PropsWithChildren<CircleProps>): ReactElement => {
  const { circle } = useCircleStyles({ color, size, variant });

  return (
    <Avatar className={`${circle} ${className ? className : ''}`}>
      {children || ' '}
    </Avatar>
  );
};
