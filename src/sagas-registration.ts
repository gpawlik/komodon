import * as R from 'ramda';
import { all, fork } from 'redux-saga/effects';

import { authSagas } from '~/domains/auth/sagas';
import { userSagas } from '~/domains/user/sagas';
import { alertsSagas } from '~/domains/alerts/sagas';
import { networkSagas } from '~/domains/network/sagas';
import { destinationsSagas } from '~/domains/destinations/sagas';
import { searchSagas } from '~/domains/search/sagas';
import { subscriptionSagas } from '~/domains/subscriptions/sagas';

const forkSagas = R.compose(all, R.map(fork), R.flatten);

export default function* root() {
    yield forkSagas([
        authSagas,
        userSagas,
        alertsSagas,
        networkSagas,
        destinationsSagas,
        searchSagas,
        subscriptionSagas,
    ]);
}
