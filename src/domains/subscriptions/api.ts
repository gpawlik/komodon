import { call, select } from 'redux-saga/effects';

import { API_ENDPOINT } from '~/constants';
import { getUserToken } from '~/domains/auth/selectors';

export function* getSubscriptions() {
    const token = yield select(getUserToken);

    return yield call(fetch, `${API_ENDPOINT}/subscriptions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
    });
}

export function* getSubscriptionHistory(id) {
    const token = yield select(getUserToken);

    return yield call(fetch, `${API_ENDPOINT}/subscription/${id}/price`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
    });
}

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

export function* deleteSubscription(id) {
    const token = yield select(getUserToken);

    return yield call(fetch, `${API_ENDPOINT}/subscription/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
    });
}
