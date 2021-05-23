import React, { useContext } from 'react';
import { FormCreator } from 'app/shared/components/Form/FormCreator/FormCreator';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';
import { FormElementValue } from 'app/shared/types/formElementValue.type';

export const SurveyGraphicEditor = (): React.ReactElement => {
  const { state, dispatch } = useContext(FormCreatorContext);
  const { form } = state;

  const onChangeFormElementValue = (
    id: string,
    value?: FormElementValue,
  ): void => {
    dispatch({
      type: FormCreatorContextActionType.setElementValue,
      payload: { id, value },
    });
  };

  return (
    <FormCreator
      formElements={form || []}
      changeFormElementValue={onChangeFormElementValue}
    />
  );
};
