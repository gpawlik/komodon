import { call, put, throttle } from 'redux-saga/effects';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { GET_DESTINATIONS } from './constants';
import { getDestinationsSuccess, getDestinationsError } from './actions';

// const res = [
//     {
//         placeId: 'barcelona_es',
//         placeName: 'Barcelona',
//         placeCode: 'BCN',
//         cityId: 'BCN',
//         cityName: 'Barcelona',
//         countryId: 'ES',
//         countryName: 'Spain',
//         type: 'CITY',
//         airports: 1,
//         subPlaces: [],
//     },
//     {
//         placeId: 'bari_it',
//         placeName: 'Bari',
//         placeCode: 'BRI',
//         cityId: 'BRI',
//         cityName: 'Bari',
//         countryId: 'IT',
//         countryName: 'Italy',
//         type: 'CITY',
//         airports: 1,
//         subPlaces: [],
//     },
//     {
//         placeId: 'bariloche_rn_ar',
//         placeName: 'Bariloche',
//         placeCode: 'BRC',
//         cityId: 'BRC',
//         cityName: 'Bariloche',
//         countryId: 'AR',
//         countryName: 'Argentina',
//         type: 'CITY',
//         airports: 1,
//         subPlaces: [],
//     },
// ];

export function* searchDestinations({ payload: { destination = '' } = {} }: any) {
    if (destination.length < 2) {
        yield put(getDestinationsError());
        return;
    }
    const [res = {}] = yield call(handleApi(api.getDestinationsList), {
        destination,
    });
    if (res && !res.message) {
        yield put(getDestinationsSuccess(res));
    }
}

function* watchSearchDestinations() {
    yield throttle(600, GET_DESTINATIONS, searchDestinations);
}

export const destinationsSagas = [watchSearchDestinations];
