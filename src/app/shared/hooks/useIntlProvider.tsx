import { createIntl, createIntlCache, IntlShape } from 'react-intl';
import translations from 'app/shared/translations';

const languages = ['pl', 'en', 'de'];
const defaultLanguage = 'en';

const useIntlProvider = (): IntlShape => {
  const cache = createIntlCache();
  const locale = languages.includes(navigator.language)
    ? navigator.language
    : defaultLanguage;
  const messages = translations[locale as 'en' | 'de' | 'pl'];

  return createIntl(
    {
      locale,
      messages,
    },
    cache,
  );
};

export default useIntlProvider;
