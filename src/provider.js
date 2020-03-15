// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { SafeView } from '~/components/safe-view';

type NavigationProps = {
    componentId: string,
};

export const provider = (Comp: *, store: *, persistor: *) => (props: NavigationProps) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SafeView>
                <Comp {...props} />
            </SafeView>
        </PersistGate>
    </Provider>
);
