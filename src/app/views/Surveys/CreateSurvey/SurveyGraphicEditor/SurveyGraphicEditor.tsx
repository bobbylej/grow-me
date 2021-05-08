import React from 'react';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';
import { SingleQuestion } from 'app/shared/components/SingleQuestion/SingleQuestion';

export const SurveyGraphicEditor = (): React.ReactElement => {
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
  return (
    <div>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
      <SingleQuestion text="test1" />
    </div>
  );
};
