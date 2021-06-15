import { useIntl } from 'react-intl';
import React, { ReactElement, useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { FormHeader } from 'app/shared/components/Form/FormHeader/FormHeader';
import { useCreateSurveyStyles } from 'app/views/Surveys/CreateSurvey/CreateSurvey.styles';
import { Tabs } from 'app/shared/components/Tabs/Tabs';
import { Tab } from 'app/shared/interfaces/tab.interface';
import { SurveyGraphicEditor } from 'app/views/Surveys/CreateSurvey/SurveyGraphicEditor/SurveyGraphicEditor';
import { SurveyMarkdown } from 'app/views/Surveys/CreateSurvey/SurveyMarkdown/SurveyMarkdown';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';

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

  const { state, dispatch } = useContext(FormCreatorContext);

  const onChangeTitle = (title: string): void => {
    dispatch({
      type: FormCreatorContextActionType.setTitle,
      payload: title,
    });
  };

  const onChangeDescription = (description: string): void => {
    dispatch({
      type: FormCreatorContextActionType.setDescription,
      payload: description,
    });
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
          title={state.title}
          description={state.description}
          color="secondary"
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
        />
      </Grid>
      <Grid item xs={12} className={surveySection}>
        <Tabs tabs={tabs} color="secondary"></Tabs>
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
