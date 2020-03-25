import { call } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';

export function* getDestinationsList({ destination = '' }) {
    return yield call(fetch, `${API_ENDPOINT}/places?query=${destination}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
