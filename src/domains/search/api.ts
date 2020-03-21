import { call } from 'redux-saga/effects';

export function* getFlightResults(payload) {
    return yield call(fetch, 'https://api.komodon.com/v2/flights', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
