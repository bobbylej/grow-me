import { createIntl, createIntlCache, IntlShape } from 'react-intl';
import translations from 'app/shared/translations';

const useIntlProvider = (): IntlShape => {
  const cache = createIntlCache();
  return createIntl(
    {
      locale: navigator.language,
      messages: translations,
    },
    cache,
  );
};

export default useIntlProvider;
