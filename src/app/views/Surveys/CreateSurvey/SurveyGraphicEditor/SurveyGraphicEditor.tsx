import React, { useContext } from 'react';
import { FormCreator } from 'app/shared/components/Form/FormCreator/FormCreator';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';
import { FormElementValue } from 'app/shared/types/formElementValue.type';
import { MarkdownRuleType } from 'app/shared/types/markdownRule.type';

export const SurveyGraphicEditor = (): React.ReactElement => {
  const { state, dispatch } = useContext(FormCreatorContext);
  const { formElements } = state;

  const onChangeFormElementValue = (
    id: string,
    value?: FormElementValue,
  ): void => {
    dispatch({
      type: FormCreatorContextActionType.setElementValue,
      payload: { id, value },
    });
  };

  const onAddFormElement = (
    type: MarkdownRuleType,
    parentId?: string,
  ): void => {
    dispatch({
      type: FormCreatorContextActionType.addElement,
      payload: { type, parentId },
    });
  };

  return (
    <FormCreator
      color="secondary"
      formElements={formElements || []}
      changeFormElementValue={onChangeFormElementValue}
      addFormElement={onAddFormElement}
    />
  );
};
