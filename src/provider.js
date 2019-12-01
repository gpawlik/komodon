// @flow
import * as React from 'react';
import { Provider } from 'react-redux';

import { SafeView } from '~/components/safe-view';
import { IntlProvider } from '~/utils/intl-provider';

type NavigationProps = {
    componentId: string,
};

export const provider = (Comp: *, store: *) => (props: NavigationProps) => (
    <Provider store={store}>
        <IntlProvider>
            <SafeView>
                <Comp {...props} />
            </SafeView>
        </IntlProvider>
    </Provider>
);
