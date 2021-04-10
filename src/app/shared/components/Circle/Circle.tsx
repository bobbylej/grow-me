import React, { ReactElement } from 'react';
import { Avatar } from '@material-ui/core';
import { useCircleStyles } from './Circle.styles';

export interface CircleProps {
  text?: string;
  icon?: string;
}

export const Circle = ({ text, icon }: CircleProps): ReactElement => {
  const { circle } = useCircleStyles();

  return (
    <div>
      <Avatar className={circle}>{text || icon}</Avatar>
    </div>
  );
};
