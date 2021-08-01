import { db } from 'app/shared/api';
import {
  convertSurveyToCreate,
  convertSurveyToGet,
  convertSurveyToUpdate,
} from 'app/shared/api/converters/surveys.convert';
import { ApiCollection } from 'app/shared/api/enums/collections.enum';
import {
  ApiSurvey,
  Survey,
} from 'app/shared/interfaces/survey.interface';

export const getSurveys = (limit = 10): Promise<Survey[]> => {
  return db
    .collection(ApiCollection.Surveys)
    .orderBy('modifiedAt')
    .limit(limit)
    .get()
    .then((data) => {
      const surveys: Survey[] = [];
      data.forEach((doc) => {
        const survey = {
          ...(doc.data() as ApiSurvey),
          id: doc.id,
        };
        surveys.push(convertSurveyToGet(survey));
      });
      return surveys;
    });
};

export const getSurvey = (id: string): Promise<Survey> => {
  return db
    .collection(ApiCollection.Surveys)
    .doc(id)
    .get()
    .then((doc) => {
      return convertSurveyToGet({
        ...(doc.data() as ApiSurvey),
        id: doc.id,
      } as ApiSurvey);
    });
};

export const createSurvey = (
  survey: Omit<Survey, 'id'>,
): Promise<Survey> => {
  return db
    .collection(ApiCollection.Surveys)
    .add(convertSurveyToCreate(survey))
    .then((doc) => {
      return convertSurveyToGet({
        ...survey,
        id: doc.id,
      } as ApiSurvey);
    });
};

export const updateSurvey = (survey: Survey): Promise<void> => {
  return db
    .collection(ApiCollection.Surveys)
    .doc(survey.id)
    .update(convertSurveyToUpdate(survey));
};
