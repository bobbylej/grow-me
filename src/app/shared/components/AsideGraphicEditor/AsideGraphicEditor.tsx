import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { Circle } from 'app/shared/components/Circle/Circle';
import { useAsideGraphicEditor } from 'app/shared/components/AsideGraphicEditor/AsideGraphicEditor.styles';
import { AsideGraphic } from 'app/shared/interfaces/asideGraphic';

export interface AsideGraphicEditorProps {
  circleEditor: AsideGraphic[];
  direction: 'column' | 'row';
}

export const AsideGraphicEditorProps = ({
  circleEditor,
  direction,
}: AsideGraphicEditorProps): ReactElement => {
  const { asideGraphicEditor } = useAsideGraphicEditor();

  const intl = useIntl();

  const asideEditor = circleEditor.map((item) => (
    <Grid key={item.id} item xs={3}>
      <Circle
        circleParmas={item.active ? 'active' : undefined}
        theme="template"
      />
      <Typography>
        {intl.formatMessage({
          id: `${item.idTranslation}`,
          defaultMessage: `${item.defaultMessage}`,
        })}
      </Typography>
    </Grid>
  ));

  return (
    <Grid
      className={asideGraphicEditor}
      container
      spacing={2}
      direction={direction}
      justify="space-between"
      alignItems="center"
    >
      {asideEditor}
    </Grid>
  );
};
