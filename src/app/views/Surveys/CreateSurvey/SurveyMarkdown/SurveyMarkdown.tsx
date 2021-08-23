import React, { useContext } from 'react';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';
import { FormMarkdown } from 'app/shared/components/Form/FormMarkdown/FormMarkdown';

export const SurveyMarkdown = (): React.ReactElement => {
  const { state, dispatch } = useContext(FormCreatorContext);
  const { markdown } = state;

  const onChangeMarkdown = (markdown: string): void => {
    dispatch({
      type: FormCreatorContextActionType.setMarkdown,
      payload: markdown,
    });
  };

  return (
    <FormMarkdown
      color="primary"
      markdown={markdown}
      changeMarkdown={(markdown) => onChangeMarkdown(markdown)}
    />
  );
};
