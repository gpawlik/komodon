import { call, select } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';
import { getIsFlexibleSearch } from './selectors';

export function* getFlightResults(payload) {
    const isFlexible = yield select(getIsFlexibleSearch);
    const type = isFlexible ? '/flexible' : '';

    return yield call(fetch, `${API_ENDPOINT}/flights${type}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
