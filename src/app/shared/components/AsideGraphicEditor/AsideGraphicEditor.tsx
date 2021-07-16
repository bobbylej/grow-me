import React, { ReactElement, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideItem } from 'app/shared/interfaces/asideItem.interface';
import { SimplyColor } from 'app/shared/types/color.type';
import { CircleVariant } from 'app/shared/types/circleVariant.type';
import { IntersectionContext } from 'app/shared/context/IntersectionContext/IntersectionContext';
import { IntersectionState } from 'app/shared/enums/intersectionState.enum';

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
  const { state } = useContext(IntersectionContext);

  const styles = useAsideGraphicEditor({ color });

  const getCircleVariant = (item: AsideItem): CircleVariant => {
    const status = state.itemsState[item.id];
    switch (status || item.status) {
      case IntersectionState.active:
        return 'active';
      case IntersectionState.pending:
        return 'outlined';
      case IntersectionState.done:
        return 'contained';
    }
  };

  const getNameActiveClass = (
    item: AsideItem,
  ): string | undefined => {
    const status = state.itemsState[item.id];
    switch (status || item.status) {
      case IntersectionState.active:
        return styles.nameItemActive;
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
      <Typography
        className={`${styles.nameItem} ${getNameActiveClass(item)}`}
      >
        {item.name}
      </Typography>
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
