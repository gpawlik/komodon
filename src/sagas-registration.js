// @flow
import * as R from 'ramda';
import { all, fork } from 'redux-saga/effects';

import { userSagas } from '~/domains/user/sagas';
import { alertsSagas } from '~/domains/alerts/sagas';
import { networkSagas } from '~/domains/network/sagas';
import { destinationsSagas } from '~/domains/destinations/sagas';
import { searchSagas } from '~/domains/search/sagas';

const forkSagas = R.compose(all, R.map(fork), R.flatten);

export default function* root(): Generator<*, *, *> {
    yield forkSagas([userSagas, alertsSagas, networkSagas, destinationsSagas, searchSagas]);
}
