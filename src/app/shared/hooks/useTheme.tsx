import {
  createMuiTheme,
  Theme,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import defaultTheme from 'app/shared/constants/theme';

const useTheme = (): Theme => {
  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  return React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...defaultTheme.palette,
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
};

export default useTheme;
