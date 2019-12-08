// @flow
import type { Effect } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* getFlightResults(payload): Generator<Effect, *, *> {
    console.log({ payload });
    return yield call(fetch, 'https://api.komodon.com/v1/search/IE/en-GB/EUR', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
