import { call, put, takeLatest } from 'redux-saga/effects';

//import { handleApi } from '~/utils/api';
import { filterEmpty } from '~/utils';

//import * as api from './api';
import { receiveResults } from '~/domains/results/actions';
import { result } from '~/domains/results/mock';
import { SEARCH_FLIGHTS } from './constants';

export function* searchFlights({ payload }) {
    const { departureText, returnText, departurePlace = {}, destinationPlace = {}, ...rest } = payload;
    const formatted = {
        ...rest,
        departurePlace: departurePlace.placeId,
        destinationPlace: destinationPlace.placeId,
    };
    const filtered = filterEmpty(formatted);
    //const [result = {}] = yield call(handleApi(api.getFlightResults), filtered);

    yield put(receiveResults(result));
}

function* watchSearchFlights() {
    yield takeLatest(SEARCH_FLIGHTS, searchFlights);
}

export const searchSagas = [watchSearchFlights];
