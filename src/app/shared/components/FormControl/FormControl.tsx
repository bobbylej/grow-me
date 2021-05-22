import React, { ReactElement } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { RadioCustom } from 'app/shared/components/RadioCustom/RadioCustom';
import { CheckBoxCustom } from 'app/shared/components/CheckBoxCustom/CheckBoxCustom';
import { Weight } from 'app/shared/components/Weight/Weight';

export interface FormControlProps {
  control: ReactElement;
  weight: ReactElement;
  value: string;
  label: string;
}

export const FormControl = ({
  control,
  weight,
  value,
  label,
}: FormControlProps): ReactElement => {
  return (
    <>
      <FormControlLabel
        label={label}
        control={control}
        value={value}
      />
      <div>{weight}</div>
    </>
  );
};
