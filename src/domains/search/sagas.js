// @flow
// @flow
import { call, takeLatest } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';
import { filterEmpty } from '~/utils';

import * as api from './api';
import { SEARCH_FLIGHTS } from './constants';

export function* searchFlights({ payload }): Generator<Effect, *, *> {
    const { departureText, returnText, departurePlace, destinationPlace, ...rest } = payload;
    const formatted = {
        ...rest,
        departurePlace: departurePlace.placeId,
        destinationPlace: destinationPlace.placeId,
    };
    const filtered = filterEmpty(formatted);
    const [result = {}] = yield call(handleApi(api.getFlightResults), filtered);

    console.log({ result });
}

function* watchSearchFlights(): Generator<Effect, *, *> {
    yield takeLatest(SEARCH_FLIGHTS, searchFlights);
}

export const searchSagas = [watchSearchFlights];
