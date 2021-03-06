import { Alert } from 'react-native';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { handleApi } from '~/utils/api';

import * as api from './api';
import {
    REQUEST_SUBSCRIPTIONS,
    receiveSubscriptionsSuccess,
    receiveSubscriptionsError,
    REQUEST_SUBSCRIPTION_HISTORY,
    requestSubscriptionHistorySuccess,
    requestSubscriptionHistoryError,
    CREATE_SUBSCRIPTION_ATTEMPT,
    createSubscriptionSuccess,
    createSubscriptionError,
    DELETE_SUBSCRIPTION_ATTEMPT,
    deleteSubscriptionSuccess,
    deleteSubscriptionError,
} from './actions';
import { GetSubscriptionHistoryAction, CreateSubscriptionAction, DeleteSubscriptionAction } from './types';
//import { results } from './mock';

export function* requestSubscriptionsSaga() {
    try {
        const [results] = yield call(handleApi(api.getSubscriptions));

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

export function* requestSubscriptionHistorySaga({ payload: { id } }: GetSubscriptionHistoryAction) {
    try {
        const [results] = yield call(handleApi(api.getSubscriptionHistory), id);

        if (results && Array.isArray(results)) {
            yield put(requestSubscriptionHistorySuccess({ id, result: {} }));
        } else {
            yield put(requestSubscriptionHistoryError());
        }
    } catch (e) {
        console.log(e);
        yield put(requestSubscriptionHistoryError());
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

const confirmDeleteAlertChannel = () =>
    eventChannel(emitter => {
        Alert.alert(
            'Delete subscription',
            'Are you sure you want to delete this subscription?',
            [
                { text: 'Cancel', onPress: () => emitter(false) },
                { text: 'Ok', onPress: () => emitter(true) },
            ],
            { cancelable: false },
        );

        return () => {};
    });

export function* deleteSubscriptionSaga({ payload: { id, successCb } }: DeleteSubscriptionAction) {
    try {
        const channel = yield call(confirmDeleteAlertChannel);
        const canProceed = yield take(channel);

        if (!canProceed) {
            return;
        }

        const [result] = yield call(handleApi(api.deleteSubscription), id);

        if (result?.message === 'Unauthorized') {
            yield put(deleteSubscriptionError());
        } else if (result) {
            yield put(deleteSubscriptionSuccess(id));
            yield call(successCb);
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

function* watchRequestSubscriptionHistory() {
    // @ts-ignore
    yield takeLatest(REQUEST_SUBSCRIPTION_HISTORY, requestSubscriptionHistorySaga);
}

function* watchCreateSubscription() {
    // @ts-ignore
    yield takeLatest(CREATE_SUBSCRIPTION_ATTEMPT, createSubscriptionSaga);
}

function* watchDeleteSubscription() {
    // @ts-ignore
    yield takeLatest(DELETE_SUBSCRIPTION_ATTEMPT, deleteSubscriptionSaga);
}

export const subscriptionSagas = [
    watchCreateSubscription,
    watchRequestSubscriptionHistory,
    watchRequestSubscriptions,
    watchDeleteSubscription,
];
