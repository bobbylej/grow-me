import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic.interface';

export interface AsideGraphicEditorProps {
  circleEditor: AsideGraphic[];
  direction: 'column' | 'row';
}

export const AsideGraphicEditor = ({
  circleEditor,
  direction,
}: AsideGraphicEditorProps): ReactElement => {
  const {
    asideGraphicEditor,
    itemGraphicEditor,
    nameItem,
    circleItem,
  } = useAsideGraphicEditor();

  const getCircleParams = (
    item: AsideGraphic,
  ): 'active' | 'outlined' | 'covered' => {
    switch (item.status) {
      case 'active':
        return 'active';
      case 'pending':
        return 'outlined';
      case 'done':
        return 'covered';
    }
  };

  const asideEditor = circleEditor.map((item) => (
    <Grid className={itemGraphicEditor} key={item.id} item>
      <div className={circleItem}>
        <Circle
          circleParams={getCircleParams(item)}
          theme="template"
          size={item.type === 'group' ? 'medium' : 'small'}
        />
      </div>
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
