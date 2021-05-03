import React from 'react';
import { Grid } from '@material-ui/core';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';
import { convertMarkdown } from 'app/shared/utils/markdownUtils';
import { useSurveyGraphicEditorStyles } from 'app/views/Surveys/CreateSurvey/SurveyGraphicEditor/SurveyGraphicEditor.styles';

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
  const testMarkdown = `
  *## Section 0.1

  *# Group 1
  *## Section 1.1
  *\`
    *### Question sentence 1.1.1
    *....
  *\`

  *# Group 2
  *## Section 2.1
  *\`
    *### Question sentence 2.1.1
    *()[2] Radio button 1
    *() Radio button 2
    *() Radio button 3
  *\`

  *# Group 3
  *\`
    *### Question sentence 3.1
    *[][1] Checkbox 1
    *[][2] Checkbox 2
    *[] Checkbox 3
  *\`
  *\`
    *### Question sentence 3.2
    *...
  *\`
  `;
  const content = convertMarkdown(markdown || testMarkdown);

  return (
    <>
      <Grid container direction="column" className={styles.form}>
        <SingleQuestion text="test1" />
        {content}
      </Grid>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
    </>
  );
};
