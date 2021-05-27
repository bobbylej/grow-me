import React, { ChangeEvent, useState } from 'react';
import { InputBase } from '@material-ui/core';
import { useWeightStyles } from 'app/shared/components/Weight/Weight.styles';
import { pxToRem } from 'app/shared/utils/styles.utils';
import { Color } from 'app/shared/types/color.type';

export interface WeightProps {
  weight: number;
  color?: Color;
  onChangeWeight?: (weight: number) => void;
}

export const Weight = ({
  weight = 1,
  color = 'primary',
  onChangeWeight,
}: WeightProps): React.ReactElement => {
  const {
    root,
    rootLight,
    rootSecondary,
    rootSecondaryLight,
  } = useWeightStyles();
  const [value, setValue] = useState(weight);

  const onChangeValue = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    const newValue = +event.target.value;
    setValue(newValue);
    onChangeWeight && onChangeWeight(newValue);
  };

  const getInputWidth = (): string => {
    const valueLength = `${value}`.length;
    const singleNumberWidth = 9;
    const width = pxToRem(valueLength * singleNumberWidth);
    return width;
  };

  const colorClasses: Partial<Record<Color, string>> = {
    primaryLight: rootLight,
    secondary: rootSecondary,
    secondaryLight: rootSecondaryLight,
  };

  return (
    <InputBase
      type="number"
      className={`${root} ${colorClasses[color]}`}
      inputProps={{ style: { width: getInputWidth() } }}
      value={value}
      onChange={onChangeValue}
    />
  );
};
