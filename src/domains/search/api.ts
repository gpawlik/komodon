import { call, select } from 'redux-saga/effects';

import { getIsFlexibleSearch } from './selectors';

export function* getFlightResults(payload) {
    const isFlexible = yield select(getIsFlexibleSearch);
    const type = isFlexible ? '/flexible' : '';

    return yield call(fetch, `https://dqd3py3vkf.execute-api.eu-west-1.amazonaws.com/v3/flights${type}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
