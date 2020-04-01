import { call, put, takeLatest } from 'redux-saga/effects';

import { handleApi } from '~/utils/api';

import * as api from './api';
import {
    REQUEST_SUBSCRIPTIONS,
    receiveSubscriptionsSuccess,
    receiveSubscriptionsError,
    CREATE_SUBSCRIPTION_ATTEMPT,
    createSubscriptionSuccess,
    createSubscriptionError,
    DELETE_SUBSCRIPTION_ATTEMPT,
    deleteSubscriptionSuccess,
    deleteSubscriptionError,
} from './actions';
import { CreateSubscriptionAction, DeleteSubscriptionAction } from './types';
import { results } from './mock';

export function* requestSubscriptionsSaga() {
    try {
        //const [results] = yield call(handleApi(api.getSubscriptions));

        if (results && Array.isArray(results)) {
            yield put(receiveSubscriptionsSuccess(results));
        } else {
            yield put(receiveSubscriptionsError());
        }
    } catch (e) {
        console.log(e);
        yield put(receiveSubscriptionsError());
    }
}

export function* createSubscriptionSaga({ payload }: CreateSubscriptionAction) {
    try {
        const [result] = yield call(handleApi(api.createSubscription), payload);

        if (result) {
            yield put(createSubscriptionSuccess(result));
        }
    } catch (e) {
        console.log(e);
        yield put(createSubscriptionError());
    }
}

export function* deleteSubscriptionSaga({ payload: id }: DeleteSubscriptionAction) {
    try {
        const [result] = yield call(handleApi(api.deleteSubscription), id);

        if (result?.message === 'Unauthorized') {
            yield put(deleteSubscriptionError());
        } else if (result) {
            yield put(deleteSubscriptionSuccess(id));
        }
    } catch (e) {
        console.log(e);
        yield put(deleteSubscriptionError());
    }
}

function* watchRequestSubscriptions() {
    // @ts-ignore
    yield takeLatest(REQUEST_SUBSCRIPTIONS, requestSubscriptionsSaga);
}

function* watchCreateSubscription() {
    // @ts-ignore
    yield takeLatest(CREATE_SUBSCRIPTION_ATTEMPT, createSubscriptionSaga);
}

function* watchDeleteSubscription() {
    // @ts-ignore
    yield takeLatest(DELETE_SUBSCRIPTION_ATTEMPT, deleteSubscriptionSaga);
}

export const subscriptionSagas = [watchCreateSubscription, watchRequestSubscriptions, watchDeleteSubscription];
