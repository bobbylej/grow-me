import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useFabContainerStyles } from 'app/shared/components/FabContainer/FabContainer.styles';
import useLayoutStyles from 'app/shared/styles/layout.styles';

export const FabContainer = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const { fabContainer, fabContent } = useFabContainerStyles();
  const { content } = useLayoutStyles();

  return (
    <div className={fabContainer}>
      <Grid container spacing={2} className={content}>
        <Grid item xs={12}>
          <div className={fabContent}>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
};
