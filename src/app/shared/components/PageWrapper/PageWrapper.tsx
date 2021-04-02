import React, { ReactElement, ReactNode, useContext } from 'react';
import { HeaderTitle } from 'app/shared/components/HeaderTitle/HeaderTitle';
import { PageContext } from 'app/shared/context/PageContext/PageContext';
import { usePageWrapperStyles } from 'app/shared/components/PageWrapper/PageWrapper.styles';

export const PageWrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const { state } = useContext(PageContext);
  const styles = usePageWrapperStyles();

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle title={state.title}></HeaderTitle>
      </div>
      {children}
    </div>
  );
};
