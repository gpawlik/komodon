import { call, select } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';
import { getUserToken } from '~/domains/auth/selectors';

export function* createSubscription(payload) {
    const token = yield select(getUserToken);

    return yield call(fetch, `${API_ENDPOINT}/subscription`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
        body: JSON.stringify(payload),
    });
}
