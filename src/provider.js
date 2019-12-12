// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { SafeView } from '~/components/safe-view';
import { IntlProvider } from '~/utils/intl-provider';

type NavigationProps = {
    componentId: string,
};

export const provider = (Comp: *, store: *, persistor: *) => (props: NavigationProps) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <IntlProvider>
                <SafeView>
                    <Comp {...props} />
                </SafeView>
            </IntlProvider>
        </PersistGate>
    </Provider>
);
