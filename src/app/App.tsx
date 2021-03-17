import React, { ReactElement } from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import logo from 'assets/images/logo.svg';
import useTheme from 'app/shared/hooks/useTheme';

function App(): ReactElement {
  const theme = useTheme();

  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
          <Button variant="contained" color="primary">
            Primary button
          </Button>
          <Button variant="contained" color="secondary">
            Secondary button
          </Button>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
