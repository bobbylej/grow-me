import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';

const Welcome = (): ReactElement => {
  const intl = useIntl();

  return <p>{intl.formatMessage({ id: 'GLOBAL.TITLE.HELLO' })}</p>;
};

export default Welcome;
