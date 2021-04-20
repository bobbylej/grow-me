import { useIntl } from 'react-intl';
import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import useLayoutStyles from 'app/shared/styles/layout.styles';
import { usePageTitle } from 'app/shared/hooks/usePageTitle';
import { FormHeader } from 'app/shared/components/Form/FormHeader/FormHeader';
import { useCreateSurveyStyles } from 'app/views/Surveys/CreateSurvey/CreateSurvey.styles';

export const CreateSurvey = (): ReactElement => {
  const intl = useIntl();
  const { content } = useLayoutStyles();
  const { header } = useCreateSurveyStyles();

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
    <Grid className={content} container spacing={2}>
      <Grid item xs={12} className={header}>
        <FormHeader
          editMode={true}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
        />
      </Grid>
    </Grid>
  );
};
