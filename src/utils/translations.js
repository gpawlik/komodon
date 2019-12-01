// @flow
import { addLocaleData } from 'react-intl';
import es from 'react-intl/locale-data/es';

import { DEFAULT_LOCALE } from '~/domains/translations/constants';

addLocaleData([...es]);

export const getTranslations = (locale: string) => {
    switch (locale) {
        case 'es-es':
            return require('~/i18n/es-es.json');
        default:
            return require('~/i18n/base.json');
    }
};

export const getDeviceLocale = () => {
    return DEFAULT_LOCALE;
};
