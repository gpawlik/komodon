// @flow
import { combineReducers } from 'redux';

import { alertsReducer as alerts } from '~/domains/alerts';
import { authReducer as auth } from '~/domains/auth';
import { networkReducer as network } from '~/domains/network';
import { uiReducer as ui } from '~/domains/ui';
import { userReducer as user } from '~/domains/user';
import { searchReducer as search } from '~/domains/search';
import { destinationsReducer as destinations } from '~/domains/destinations';

export const reducer = combineReducers({
    alerts,
    auth,
    network,
    ui,
    user,
    search,
    destinations,
});
