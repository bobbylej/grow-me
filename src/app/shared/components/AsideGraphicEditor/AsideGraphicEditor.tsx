import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic.interface';
import { SimplyColor } from 'app/shared/types/color.type';

export interface AsideGraphicEditorProps {
  circleEditor: AsideGraphic[];
  direction: 'column' | 'row';
  color?: SimplyColor;
}

export const AsideGraphicEditor = ({
  circleEditor,
  direction,
  color = 'primary',
}: AsideGraphicEditorProps): ReactElement => {
  const {
    asideGraphicEditor,
    itemGraphicEditor,
    nameItem,
    circleItem,
  } = useAsideGraphicEditor({ color });

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
          color={color}
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
