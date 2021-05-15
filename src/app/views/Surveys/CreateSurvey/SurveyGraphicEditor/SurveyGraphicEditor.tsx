import React from 'react';
import { Grid } from '@material-ui/core';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { convertMarkdown } from 'app/shared/utils/markdownUtils';
import { useSurveyGraphicEditorStyles } from 'app/views/Surveys/CreateSurvey/SurveyGraphicEditor/SurveyGraphicEditor.styles';
import { QuestionGroup } from 'app/shared/components/QuestionGroup/QuestionGroup';

export interface SurveyGraphicEditorProps {
  markdown: string;
}

export const SurveyGraphicEditor = ({
  markdown,
}: SurveyGraphicEditorProps): React.ReactElement => {
  const styles = useSurveyGraphicEditorStyles();
  const circleEditorGraphic: AsideGraphic[] = [
    {
      id: 'test 1',
      name: 'test 1',
      status: 'done',
      type: 'group',
    },
    {
      id: 'test 2',
      name: 'test 2',
      status: 'active',
      type: 'section',
    },
    {
      id: 'test 3',
      name: 'test 3',
      status: 'pending',
      type: 'section',
    },
  ];
  const content = convertMarkdown(markdown);

  return (
    <div>
      <Grid container direction="column" className={styles.form}>
        <SingleQuestion text="test1">Test</SingleQuestion>
        {content}
      </Grid>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
      <SingleQuestion text="test1" />
      <QuestionGroup />
    </div>
  );
};
