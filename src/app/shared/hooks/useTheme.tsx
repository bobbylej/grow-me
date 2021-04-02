import {
  createMuiTheme,
  Theme,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import { darkTheme, lightTheme } from 'app/shared/constants/theme';

const useTheme = (): Theme => {
  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...theme.palette,
        },
        typography: {
          ...theme.typography,
        },
      }),
    [theme],
  );
};

export default useTheme;
