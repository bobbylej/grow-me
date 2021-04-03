import React, { ReactElement, useEffect } from 'react';
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
import { Surveys } from 'app/views/Surveys/Surveys';
import { PageWrapper } from 'app/shared/components/PageWrapper/PageWrapper';
import { PageProvider } from 'app/shared/context/PageContext/PageContext';

const App = (): ReactElement => {
  const theme = useTheme();
  const intlProvider = useIntlProvider();

  useEffect(() => {
    document.body.style.backgroundColor =
      theme.palette.background.default;
  }, [theme]);

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
            <PageProvider>
              <PageWrapper>
                <Switch>
                  <Route path="/surveys">
                    <Surveys />
                  </Route>
                  <Route path="/">
                    <PageOne />
                  </Route>
                </Switch>
              </PageWrapper>
            </PageProvider>
          </Router>
        </ThemeProvider>
      </AppProvider>
    </IntlProvider>
  );
};

export default App;
