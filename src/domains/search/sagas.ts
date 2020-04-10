import * as R from 'ramda';
import { call, put, takeLatest } from 'redux-saga/effects';
import moment from 'moment-timezone';

import { handleApi } from '~/utils/api';
import { filterEmpty } from '~/utils';
import { REHYDRATE } from '~/constants';

import * as api from './api';
import { receiveResults } from '~/domains/results/actions';
//import { result } from '~/domains/results/mock';
import { setSearchCriteria } from './actions';
import { SEARCH_FLIGHTS } from './constants';

export function* searchFlights({ payload }: any) {
    const { departureText, returnText, departurePlace = {}, destinationPlace = {}, ...rest } = payload;
    const formatted = {
        ...rest,
        departurePlace: departurePlace.placeId,
        destinationPlace: destinationPlace.placeId,
    };
    const filtered = filterEmpty(formatted);
    const [result = {}] = yield call(handleApi(api.getFlightResults), filtered);

    yield put(receiveResults(result));
}

function* watchSearchFlights() {
    yield takeLatest(SEARCH_FLIGHTS, searchFlights);
}

// We need to reset the stored dates if they are from the past
function* rehydrateSaga({ payload }) {
    const departureFrom = payload?.search?.departureDates?.from;
    const returnFrom = payload?.search?.returnDates?.from;
    const now = moment();

    const resetDeparture = now.isAfter(departureFrom) ? { departureDates: {}, departureText: '' } : {};
    const resetReturn = now.isAfter(returnFrom) ? { returnDates: {}, returnText: '' } : {};

    if (!R.isEmpty(resetDeparture) || !R.isEmpty(resetReturn)) {
        yield put(setSearchCriteria({ ...resetDeparture, ...resetReturn }));
    }
}

function* watchRehydrate() {
    // @ts-ignore
    yield takeLatest(REHYDRATE, rehydrateSaga);
}

export const searchSagas = [watchSearchFlights, watchRehydrate];
