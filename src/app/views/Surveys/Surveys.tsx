import React, { ReactElement } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { CreateSurvey } from 'app/views/Surveys/CreateSurvey/CreateSurvey';
import { SurveysList } from 'app/views/Surveys/SurveysList/SurveysList';
import { FormCreatorProvider } from 'app/shared/context/FormCreatorContext/FormCreatorContext';

export const Surveys = (): ReactElement => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <SurveysList />
      </Route>
      <Route path={`${path}/new`}>
        <FormCreatorProvider>
          <CreateSurvey />
        </FormCreatorProvider>
      </Route>
    </Switch>
  );
};
