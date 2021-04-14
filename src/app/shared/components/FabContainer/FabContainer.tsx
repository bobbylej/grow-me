import React, { ReactElement } from 'react';
import { useFabContainerStyles } from 'app/shared/components/FabContainer/FabContainer.styles';

export const FabContainer = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const { fabContainer, fabContent } = useFabContainerStyles();

  return (
    <div className={fabContainer}>
      <div className={fabContent}>{children}</div>
    </div>
  );
};
