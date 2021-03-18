import React, { ReactElement } from 'react';
import useStyles from 'app/views/PageOne/useStyles';

const PageOne = (): ReactElement => {
  const { root } = useStyles();
  return <div className={root}>Page One</div>;
};

export default PageOne;
