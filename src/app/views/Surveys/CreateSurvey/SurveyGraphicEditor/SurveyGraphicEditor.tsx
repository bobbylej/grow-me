import React from 'react';
import { AsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';

export const SurveyGraphicEditor = (): React.ReactElement => {
  const circleEditorGraphic: AsideGraphic[] = [
    {
      id: 'test 1',
      name: 'test 1',
      active: false,
      type: 'group',
    },
    {
      id: 'test 2',
      name: 'test 2',
      active: true,
      type: 'section',
    },
  ];
  // const circle: CircleProps = { theme: 'template', size: 'small' };
  return (
    <div>
      <AsideGraphicEditor
        direction="column"
        circleEditor={circleEditorGraphic}
      />
    </div>
  );
};
