import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideItem } from 'app/shared/interfaces/asideItem.interface';
import { SimplyColor } from 'app/shared/types/color.type';
import { CircleVariant } from 'app/shared/types/circleVariant.type';
import { IntersectionContext } from 'app/shared/context/IntersectionContext/IntersectionContext';
import { IntersectionState } from 'app/shared/enums/intersectionState.enum';
import { AsidePosition } from 'app/shared/types/asidePosition.type';

export interface AsideGraphicEditorProps {
  items: AsideItem[];
  direction: 'column' | 'row';
  position?: AsidePosition;
  color?: SimplyColor;
}

export const AsideGraphicEditor = ({
  items,
  direction,
  position = 'sticky',
  color = 'primary',
}: AsideGraphicEditorProps): ReactElement => {
  const { state } = useContext(IntersectionContext);
  const [isFlying, setFlying] = useState(false);
  const styles = useAsideGraphicEditor({ color, position, isFlying });
  const asideRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (position === 'sticky') {
      window.addEventListener('scroll', setIsFixedStatus, true);
      return () => {
        window.removeEventListener('scroll', setIsFixedStatus, true);
      };
    }
  });

  const setIsFixedStatus = () => {
    if (asideRef.current && parentRef.current) {
      const asideRect = asideRef.current?.getBoundingClientRect();
      const parentRect = parentRef.current?.getBoundingClientRect();

      const isAboveCenterOfScreen =
        asideRect.top + asideRect.height / 2 <=
        window.innerHeight / 2;
      const isAboveInitPosition = asideRect.top < parentRect.top;
      const shouldBeFixed =
        !isAboveInitPosition && isAboveCenterOfScreen;

      setFlying(shouldBeFixed);
    }
  };

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
    <div ref={parentRef} className={styles.root}>
      <Grid
        ref={asideRef}
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
