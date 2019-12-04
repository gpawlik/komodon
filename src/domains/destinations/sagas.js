// @flow
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { GET_DESTINATIONS } from './constants';
import { getDestinationsSuccess, getDestinationsError } from './actions';

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

export function* searchDestinations({ payload: { destination = '' } = {} }): Generator<Effect, *, *> {
    console.log({ destination });
    if (destination.length < 2) {
        yield put(getDestinationsError());
        return;
    }
    const [res = {}] = yield call(handleApi(api.getDestinationsList), {
        destination,
    });

    yield put(getDestinationsSuccess(res));
}

function* watchSearchDestinations(): Generator<Effect, *, *> {
    yield takeLatest(GET_DESTINATIONS, searchDestinations);
}

export const destinationsSagas = [watchSearchDestinations];
