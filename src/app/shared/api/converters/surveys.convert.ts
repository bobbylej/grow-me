import { convertNestedDataToApi } from 'app/shared/api/converters/shared.convert';
import {
  ApiSurvey,
  Survey,
} from 'app/shared/interfaces/survey.interface';
import { removeUndefinedValues } from 'app/shared/utils/data.utils';
import { countFormElements } from 'app/shared/utils/formElement.utils';

export const convertSurveyToGet = (survey: ApiSurvey): Survey => {
  return {
    ...survey,
    formElements: survey.formElements ?? [],
  };
};

export const convertSurveyToCreate = (
  survey: Omit<Survey, 'id'>,
): Omit<ApiSurvey, 'id'> => {
  const surveyToCreate = {
    ...survey,
    formElements: convertNestedDataToApi(survey.formElements),
    counter: countFormElements(survey.formElements),
    createdAt: new Date(),
    modifiedAt: new Date(),
  };
  removeUndefinedValues(surveyToCreate);
  return surveyToCreate;
};

export const convertSurveyToUpdate = (survey: Survey): ApiSurvey => {
  const surveyToUpdate = {
    ...survey,
    formElements: convertNestedDataToApi(survey.formElements),
    counter: countFormElements(survey.formElements),
    modifiedAt: new Date(),
  };
  removeUndefinedValues(surveyToUpdate);
  return surveyToUpdate;
};
