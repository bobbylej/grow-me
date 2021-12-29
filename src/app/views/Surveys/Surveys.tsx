import React, { ReactElement } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { CreateSurvey } from 'app/views/Surveys/CreateSurvey/CreateSurvey';
import { SurveysList } from 'app/views/Surveys/SurveysList/SurveysList';
import { RouterPath } from 'app/shared/enums/routerPath.enum';
import { EditSurvey } from 'app/views/Surveys/EditSurvey/EditSurvey';
import { FormCreatorProvider } from 'app/shared/context/FormCreatorContext/FormCreatorContext';

export const Surveys = (): ReactElement => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <SurveysList />
      </Route>
      <Route path={`${path}/${RouterPath.New}`}>
        <FormCreatorProvider>
          <CreateSurvey />
        </FormCreatorProvider>
      </Route>
      <Route path={`${path}/:id`}>
        <FormCreatorProvider>
          <EditSurvey />
        </FormCreatorProvider>
      </Route>
    </Switch>
  );
};
