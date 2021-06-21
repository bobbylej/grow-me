import { TextField, TextFieldProps } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useFormTextFieldStyles } from 'app/shared/components/Form/FormTextField/FormTextField.styles';
import { SimplyColor } from 'app/shared/types/color.type';

export interface FormTextFieldProps {
  inputSize?: 'small' | 'medium' | 'h2' | 'h3';
  weight?: ReactElement;
  color?: SimplyColor;
}

export const FormTextField = ({
  inputSize,
  weight,
  color = 'primary',
  ...props
}: FormTextFieldProps & TextFieldProps): ReactElement => {
  const { root, textField } = useFormTextFieldStyles({
    inputSize,
    color,
  });
  return (
    <div className={root}>
      <TextField
        {...props}
        color={color}
        className={`${textField} ${props.className}`}
      />
      {weight}
    </div>
  );
};
