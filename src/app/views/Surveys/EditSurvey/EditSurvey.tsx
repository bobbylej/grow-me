import { useIntl } from 'react-intl';
import React, { ReactElement, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import {
  getSurvey,
  updateSurvey,
} from 'app/shared/api/services/surveys.service';
import { Survey } from 'app/shared/interfaces/survey.interface';
import { SurveyForm } from 'app/views/Surveys/CreateSurvey/SurveyForm/SurveyForm';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';

export const EditSurvey = (): ReactElement => {
  const intl = useIntl();
  const { dispatch } = useContext(FormCreatorContext);
  const { id } = useParams<{ id: string }>();

  usePageTitle(
    intl.formatMessage({
      id: 'EDIT_SURVEY.TITLE',
      defaultMessage: 'Edit Survey',
    }),
  );

  useEffect(() => {
    if (id) {
      getSurvey(id).then((survey) => {
        dispatch({
          type: FormCreatorContextActionType.setState,
          payload: survey,
        });
      });
    }
  }, [id, dispatch]);

  const saveSurvey = async (survey: Partial<Survey>) => {
    await updateSurvey(survey as Survey);
  };

  const handleSubmit = (survey: Partial<Survey>): void => {
    saveSurvey(survey);
  };

  return (
    <SurveyForm
      submitButtonLabel={intl.formatMessage({
        id: 'CREATE_SURVEY.ACTION.UPDATE_SURVEY',
        defaultMessage: 'Update Survey',
      })}
      onSubmit={handleSubmit}
    />
  );
};
