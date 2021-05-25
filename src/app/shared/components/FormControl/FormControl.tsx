import React, { ReactElement } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { useFormControlStyles } from 'app/shared/components/FormControl/FormControl.styles';

export interface FormControlProps {
  control: ReactElement;
  weight?: ReactElement;
  value: string;
  label: string;
}

export const FormControl = ({
  control,
  weight,
  value,
  label,
}: FormControlProps): ReactElement => {
  const { formControlWrapper } = useFormControlStyles();
  return (
    <div className={formControlWrapper}>
      <FormControlLabel
        label={label}
        control={control}
        value={value}
      />
      <div>{weight}</div>
    </div>
  );
};
