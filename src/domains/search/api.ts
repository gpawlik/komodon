import { call, select } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';
import { getIsFlexibleSearch } from './selectors';

export function* getFlightResults(payload) {
    const isFlexible = yield select(getIsFlexibleSearch);
    const flexibleOptions = isFlexible ? { showType: 'ONE_PER_CITY', sort: 'PRICE', showOnlyPrices: true } : {};

    return yield call(fetch, `${API_ENDPOINT}/flights`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...payload, ...flexibleOptions }),
    });
}
