import React, { ReactElement } from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import { IntlProvider } from 'react-intl';
import logo from 'assets/images/logo.svg';
import useTheme from 'app/shared/hooks/useTheme';
import useIntlProvider from 'app/shared/hooks/useIntlProvider';
import Welcome from 'app/shared/components/Welcome';
import Buttons from 'app/shared/components/Buttons';

const App = (): ReactElement => {
  const theme = useTheme();
  const intlProvider = useIntlProvider();

  return (
    <IntlProvider
      locale={intlProvider.locale}
      messages={intlProvider.messages}
    >
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
            <Welcome />
            <Buttons />
          </header>
        </ThemeProvider>
      </div>
    </IntlProvider>
  );
};

export default App;
