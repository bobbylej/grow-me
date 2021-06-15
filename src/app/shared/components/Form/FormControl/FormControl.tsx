import React, { ReactElement } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { useFormControlStyles } from 'app/shared/components/Form/FormControl/FormControl.styles';

export interface FormControlProps {
  control: ReactElement;
  label: string;
  weight?: ReactElement;
  editMode?: boolean;
  changeLabel?: (label: string) => void;
}

export const FormControl = ({
  control,
  label,
  weight,
  editMode = false,
  changeLabel,
}: FormControlProps): ReactElement => {
  const { root, formControlWrapper } = useFormControlStyles();

  const onChangeLabel = (label: string): void => {
    changeLabel && changeLabel(label);
  };

  const labelElement = editMode ? (
    <TextField
      value={label}
      fullWidth
      onChange={(event) => onChangeLabel(event.target.value)}
    />
  ) : (
    <Typography variant="body1">{label}</Typography>
  );

  return (
    <div className={root}>
      <div className={formControlWrapper}>
        {control}
        {labelElement}
      </div>
      <div>{weight}</div>
    </div>
  );
};
