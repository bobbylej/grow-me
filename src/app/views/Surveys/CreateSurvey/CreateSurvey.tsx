import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { createSurvey } from 'app/shared/api/services/surveys.service';
import { Survey } from 'app/shared/interfaces/survey.interface';
import { RouterPath } from 'app/shared/enums/routerPath.enum';
import { SurveyForm } from 'app/views/Surveys/CreateSurvey/SurveyForm/SurveyForm';

export const CreateSurvey = (): ReactElement => {
  const intl = useIntl();
  const history = useHistory();

  usePageTitle(
    intl.formatMessage({
      id: 'CREATE_SURVEY.TITLE',
      defaultMessage: 'Create Survey',
    }),
  );

  const changeUrlToEditSurvey = (id: string): void => {
    history.push(`/${RouterPath.Surveys}/${id}`);
  };

  const saveSurvey = async (survey: Partial<Survey>) => {
    const { id } = await createSurvey(survey as Omit<Survey, 'id'>);
    changeUrlToEditSurvey(id);
  };

  const handleSubmit = (survey: Partial<Survey>): void => {
    saveSurvey(survey);
  };

  return (
    <SurveyForm
      submitButtonLabel={intl.formatMessage({
        id: 'CREATE_SURVEY.ACTION.CREATE_SURVEY',
        defaultMessage: 'Create Survey',
      })}
      onSubmit={handleSubmit}
    />
  );
};
