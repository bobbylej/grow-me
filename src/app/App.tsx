import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import useTheme from 'app/shared/hooks/useTheme';
import useIntlProvider from 'app/shared/hooks/useIntlProvider';
import PageOne from 'app/views/PageOne/PageOne';
import { AppProvider } from 'app/shared/context/AppContext/AppContext';
import { Links } from 'app/shared/components/Links';

const App = (): ReactElement => {
  const theme = useTheme();
  const intlProvider = useIntlProvider();

  return (
    <IntlProvider
      locale={intlProvider.locale}
      messages={intlProvider.messages}
    >
      <AppProvider>
        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/page-one">
                <PageOne />
              </Route>
              <Route path="/">Home</Route>
            </Switch>
            <Links />
          </Router>
        </ThemeProvider>
      </AppProvider>
    </IntlProvider>
  );
};

export default App;
