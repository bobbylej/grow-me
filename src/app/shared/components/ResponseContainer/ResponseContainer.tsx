import React from 'react';
import { Grid } from '@material-ui/core';
import { FormElement } from 'app/shared/interfaces/formElement.interface';
import { SimplyColor } from 'app/shared/types/color.type';
import { RadioCustom } from 'app/shared/components/RadioCustom/RadioCustom';
import { CheckBoxCustom } from 'app/shared/components/CheckBoxCustom/CheckBoxCustom';
import { useResponseContainerStyles } from 'app/shared/components/ResponseContainer/ResponseContainer.styles';

export interface ResponseContainerProps {
  formElements: FormElement[];
  color: SimplyColor;
}

export const ResponseContainer = ({
  formElements,
  color,
}: ResponseContainerProps): React.ReactElement => {
  const {
    responseContainer,
    responseWrapper,
  } = useResponseContainerStyles();

  const responseButton = formElements.map((formElement) => (
    <Grid className={responseWrapper} key={formElement.id}>
      {formElement.type === 'radioButton' ? (
        <RadioCustom value={formElement.value} color={color} />
      ) : (
        <CheckBoxCustom value={formElement.value} color={color} />
      )}
    </Grid>
  ));
  return <Grid className={responseContainer}>{responseButton}</Grid>;
};
