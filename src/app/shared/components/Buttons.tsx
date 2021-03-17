import { Button } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';

const Buttons = (): ReactElement => {
  const intl = useIntl();

  return (
    <div>
      <Button variant="contained" color="primary">
        {intl.formatMessage({
          id: 'GLOBAL.LABEL.PRIMARY_BUTTON',
          defaultMessage: 'Primary Button',
        })}
      </Button>
      <Button variant="contained" color="secondary">
        {intl.formatMessage({
          id: 'GLOBAL.LABEL.SECONDARY_BUTTON',
          defaultMessage: 'Secondary Button',
        })}
      </Button>
    </div>
  );
};

export default Buttons;
