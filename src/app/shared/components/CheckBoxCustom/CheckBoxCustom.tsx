import React from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import { useCheckBoxCustomStyles } from 'app/shared/components/CheckBoxCustom/CheckBoxCustom.styles';

export const CheckBoxCustom = (
  props: CheckboxProps,
): React.ReactElement => {
  const { checkBox } = useCheckBoxCustomStyles();

  return <Checkbox className={checkBox} {...props} />;
};
