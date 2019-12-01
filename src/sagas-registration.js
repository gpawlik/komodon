// @flow
import * as R from 'ramda';
import { all, fork } from 'redux-saga/effects';

import { userSagas } from '~/domains/user/sagas';
import { alertsSagas } from '~/domains/alerts/sagas';
import { eventsSagas } from '~/domains/events/sagas';
import { filtersSagas } from '~/domains/filters/sagas';
import { networkSagas } from '~/domains/network/sagas';

const forkSagas = R.compose(
    all,
    R.map(fork),
    R.flatten
);

export default function* root(): Generator<*, *, *> {
    yield forkSagas([userSagas, alertsSagas, eventsSagas, filtersSagas, networkSagas]);
}
