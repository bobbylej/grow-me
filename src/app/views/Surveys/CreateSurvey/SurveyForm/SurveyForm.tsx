import { useIntl } from 'react-intl';
import React, { ReactElement, useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { FormHeader } from 'app/shared/components/Form/FormHeader/FormHeader';
import { Tabs } from 'app/shared/components/Tabs/Tabs';
import { Tab } from 'app/shared/interfaces/tab.interface';
import { SurveyGraphicEditor } from 'app/views/Surveys/CreateSurvey/SurveyGraphicEditor/SurveyGraphicEditor';
import { SurveyMarkdown } from 'app/views/Surveys/CreateSurvey/SurveyMarkdown/SurveyMarkdown';
import { FormCreatorContext } from 'app/shared/context/FormCreatorContext/FormCreatorContext';
import { FormCreatorContextActionType } from 'app/shared/context/FormCreatorContext/FormCreatorContext.actions';
import { Survey } from 'app/shared/interfaces/survey.interface';
import { useSurveyFormStyles } from 'app/views/Surveys/CreateSurvey/SurveyForm/SurveyForm.styles';

export interface SurveyFormProps {
  submitButtonLabel: string;
  onSubmit?: (survey: Partial<Survey>) => void;
}

export const SurveyForm = ({
  submitButtonLabel,
  onSubmit,
}: SurveyFormProps): ReactElement => {
  const intl = useIntl();
  const { state, dispatch } = useContext(FormCreatorContext);
  const { path, url } = useRouteMatch();
  const { content } = useLayoutStyles();
  const {
    surveyContainer,
    surveySection,
    surveyButtons,
  } = useSurveyFormStyles();
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

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const surveyToSave: Partial<Survey> = {
      id: state.id,
      title: state.title || '',
      description: state.description,
      markdown: state.markdown,
      formElements: state.formElements,
    };
    onSubmit && onSubmit(surveyToSave);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            color="primary"
            onChangeTitle={onChangeTitle}
            onChangeDescription={onChangeDescription}
          />
        </Grid>
        <Grid item xs={12} className={surveySection}>
          <Tabs tabs={tabs} color="primary"></Tabs>
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
        <Grid item xs={12} className={surveyButtons}>
          <Button type="submit" variant="contained" color="secondary">
            {submitButtonLabel}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
