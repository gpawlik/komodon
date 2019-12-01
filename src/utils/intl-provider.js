// @flow
import * as React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { Text } from 'react-native';

import { getDeviceLocale, getTranslations } from '~/utils/translations';

type Props = {
    children: React.Node,
};

export const IntlProvider = ({ children }: Props) => {
    const locale = getDeviceLocale();
    const translations = getTranslations(locale);

    return (
        <ReactIntlProvider
            defaultLocale={locale}
            key={locale}
            locale={locale}
            messages={translations}
            textComponent={Text}
        >
            {children}
        </ReactIntlProvider>
    );
};
