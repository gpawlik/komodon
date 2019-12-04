// @flow
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { GET_DESTINATIONS } from './constants';
import { getDestinationsSuccess, getDestinationsError } from './actions';

const payload = [
    {
        placeId: 'barcelona_es',
        placeName: 'Barcelona',
        placeCode: 'BCN',
        cityId: 'BCN',
        cityName: 'Barcelona',
        countryId: 'ES',
        countryName: 'Spain',
        type: 'CITY',
        airports: 1,
        subPlaces: [],
    },
    {
        placeId: 'bari_it',
        placeName: 'Bari',
        placeCode: 'BRI',
        cityId: 'BRI',
        cityName: 'Bari',
        countryId: 'IT',
        countryName: 'Italy',
        type: 'CITY',
        airports: 1,
        subPlaces: [],
    },
    {
        placeId: 'bariloche_rn_ar',
        placeName: 'Bariloche',
        placeCode: 'BRC',
        cityId: 'BRC',
        cityName: 'Bariloche',
        countryId: 'AR',
        countryName: 'Argentina',
        type: 'CITY',
        airports: 1,
        subPlaces: [],
    },
];

export function* searchDestinations({ payload: { destination = '' } = {} }): Generator<Effect, *, *> {
    if (destination.length < 2) {
        yield put(getDestinationsError());
        return;
    }
    // const [res = {}] = yield call(handleApi(api.getDestinationsList), {
    //     destination,
    // });

    yield put(getDestinationsSuccess(payload));
}

function* watchSearchDestinations(): Generator<Effect, *, *> {
    yield takeLatest(GET_DESTINATIONS, searchDestinations);
}

export const destinationsSagas = [watchSearchDestinations];
