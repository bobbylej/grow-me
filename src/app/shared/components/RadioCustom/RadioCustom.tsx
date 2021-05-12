import React from 'react';
import { Radio, RadioProps } from '@material-ui/core';
import { useRadioCustomStyles } from 'app/shared/components/RadioCustom/RadioCustom.styles';

export const RadioCustom = (
  props: RadioProps,
): React.ReactElement => {
  const { radio } = useRadioCustomStyles();

  return <Radio className={radio} {...props} />;
};
