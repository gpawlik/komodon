// @flow
import type { Effect } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* getDestinationsList({ destination = '' }): Generator<Effect, *, *> {
    return yield call(fetch, `https://api.komodon.com/v1/autosuggest/place/IE/en-GB?query=${destination}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
