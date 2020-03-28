import { Auth } from 'aws-amplify';
import { call, put, takeLatest } from 'redux-saga/effects';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { CREATE_SUBSCRIPTION_ATTEMPT, createSubscriptionSuccess, createSubscriptionError } from './actions';
import { CreateSubscriptionAction } from './types';

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

function* watchCreateSubscription() {
    // @ts-ignore
    yield takeLatest(CREATE_SUBSCRIPTION_ATTEMPT, createSubscriptionSaga);
}

export const subscriptionSagas = [watchCreateSubscription];
