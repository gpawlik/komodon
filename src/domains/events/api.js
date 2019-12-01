// @flow
import type { Effect } from 'redux-saga';
import { call } from 'redux-saga/effects';

import type { RequestEvents } from './types';

export function* getEvents({ filters = {}, coordinates = {} }: RequestEvents | Object): Generator<Effect, *, *> {
    return yield call(fetch, 'http://localhost:8080/api/v1/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters, ...coordinates }),
    });
}
