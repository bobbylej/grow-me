import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';

export interface AsideGraphicEditorProps {
  circleEditor: AsideGraphic;
  direction: 'column' | 'row';
}

const circleEditorGraphic: AsideGraphic[] = [
  {
    id: 'test 1',
    name: 'test 1',
    active: false,
    type: 'group',
  },
];

export const AsideGraphicEditor = ({
  direction,
}: AsideGraphicEditorProps): ReactElement => {
  const {
    asideGraphicEditor,
    itemGraphicEditor,
    nameItem,
  } = useAsideGraphicEditor();

  const asideEditor = circleEditorGraphic.map((item) => (
    <Grid
      className={itemGraphicEditor}
      key={item.id}
      item
      xs={3}
      direction={direction}
    >
      <Circle
        circleParmas={
          item.active ? 'active' : 'outlined' || 'covered'
        }
        theme="template"
        size={item.type === 'group' ? 'medium' : 'small'}
      />
      <Typography className={nameItem}>{item.name}</Typography>
    </Grid>
  ));

  return (
    <Grid
      className={asideGraphicEditor}
      container
      spacing={2}
      direction={direction}
    >
      {asideEditor}
    </Grid>
  );
};
