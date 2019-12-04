// @flow
import { put, select, takeLatest } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { GET_DESTINATIONS } from './constants';
import { getDestinationsSuccess } from './actions';

const payload = [
    {
        id: 'MAD',
        name: 'Madrid',
    },
    {
        id: 'BER',
        name: 'Berlin',
    },
];

export function* searchDestinations({ payload: { destination } = {} }): Generator<Effect, *, *> {
    yield put(getDestinationsSuccess(payload));
}

function* watchSearchDestinations(): Generator<Effect, *, *> {
    yield takeLatest(GET_DESTINATIONS, searchDestinations);
}

export const destinationsSagas = [watchSearchDestinations];
