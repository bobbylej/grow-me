import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideItem } from 'app/shared/interfaces/asideItem.interface';
import { SimplyColor } from 'app/shared/types/color.type';
import { CircleVariant } from 'app/shared/types/circleVariant.type';

export interface AsideGraphicEditorProps {
  items: AsideItem[];
  direction: 'column' | 'row';
  color?: SimplyColor;
}

export const AsideGraphicEditor = ({
  items,
  direction,
  color = 'primary',
}: AsideGraphicEditorProps): ReactElement => {
  const styles = useAsideGraphicEditor({ color });

  const getCircleVariant = (item: AsideItem): CircleVariant => {
    switch (item.status) {
      case 'active':
        return 'active';
      case 'pending':
        return 'outlined';
      case 'done':
        return 'contained';
    }
  };

  const scrollToItem = (item: AsideItem): void => {
    document.getElementById(item.id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const asideEditor = items.map((item) => (
    <Grid
      className={styles.item}
      key={item.id}
      item
      onClick={() => scrollToItem(item)}
    >
      <div className={styles.circleItem}>
        <Circle
          variant={getCircleVariant(item)}
          color={color}
          size={item.type === 'group' ? 'medium' : 'small'}
        />
      </div>
      <Typography className={styles.nameItem}>{item.name}</Typography>
    </Grid>
  ));

  return (
    <div className={styles.root}>
      <Grid
        className={styles.asideGraphicEditor}
        container
        spacing={2}
        direction={direction}
      >
        {asideEditor}
      </Grid>
      <div className={styles.blanket}></div>
    </div>
  );
};
