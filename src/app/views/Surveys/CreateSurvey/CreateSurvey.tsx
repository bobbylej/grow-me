import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { FormHeader } from 'app/shared/components/Form/FormHeader/FormHeader';
import { useCreateSurveyStyles } from 'app/views/Surveys/CreateSurvey/CreateSurvey.styles';
import { Tabs } from 'app/shared/components/Tabs/Tabs';
import { Tab } from 'app/shared/interfaces/tab';
import { SurveyGraphicEditor } from 'app/views/Surveys/CreateSurvey/SurveyGraphicEditor/SurveyGraphicEditor';
import { SurveyMarkdown } from 'app/views/Surveys/CreateSurvey/SurveyMarkdown/SurveyMarkdown';

export const CreateSurvey = (): ReactElement => {
  const intl = useIntl();
  const { path, url } = useRouteMatch();
  const { content } = useLayoutStyles();
  const { surveyContainer, surveySection } = useCreateSurveyStyles();
  const tabs: Tab[] = [
    {
      id: 'graphic-editor',
      name: intl.formatMessage({
        id: 'GLOBAL.LABEL.GRAPHIC_EDITOR',
        defaultMessage: 'Graphic Editor',
      }),
      url: url,
    },
    {
      id: 'markdown',
      name: intl.formatMessage({
        id: 'GLOBAL.LABEL.MARKDOWN',
        defaultMessage: 'Markdown',
      }),
      url: `${url}/markdown`,
    },
  ];

  usePageTitle(
    intl.formatMessage({
      id: 'CREATE_SURVEY.TITLE',
      defaultMessage: 'Create Survey',
    }),
  );

  const onChangeTitle = (title: string): void => {
    console.log(title);
  };

  const onChangeDescription = (description: string): void => {
    console.log(description);
  };

  return (
    <Grid
      className={`${content} ${surveyContainer}`}
      container
      spacing={2}
    >
      <Grid item xs={12} className={surveySection}>
        <FormHeader
          editMode
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
        />
      </Grid>
      <Grid item xs={12} className={surveySection}>
        <Tabs tabs={tabs}></Tabs>
      </Grid>
      <Grid item xs={12} className={surveySection}>
        <Switch>
          <Route exact path={path}>
            <SurveyGraphicEditor />
          </Route>
          <Route path={`${path}/markdown`}>
            <SurveyMarkdown />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};
