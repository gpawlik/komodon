// @flow
import type { Effect } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* getDestinationsList({ destination = '' }): Generator<Effect, *, *> {
    return yield call(fetch, `https://dqd3py3vkf.execute-api.eu-west-1.amazonaws.com/v2/places?query=${destination}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
