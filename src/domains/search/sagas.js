// @flow
// @flow
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { SEARCH_FLIGHTS } from './constants';

export function* searchFlights({ payload }): Generator<Effect, *, *> {
    const [result = {}] = yield call(handleApi(api.getFlightResults), payload);

    console.log({ result });
}

function* watchSearchFlights(): Generator<Effect, *, *> {
    yield takeLatest(SEARCH_FLIGHTS, searchFlights);
}

export const searchSagas = [watchSearchFlights];
