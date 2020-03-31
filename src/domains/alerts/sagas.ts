import { delay, put, select, takeLatest } from 'redux-saga/effects';

import { setConnectionType } from '~/domains/network/actions';
import { ConnectionDataPayload } from '~/domains/network/types';

import { getAlertId } from './selectors';
import { setAlert, resetAlerts, SET_ALERT } from './actions';
import { alertTypes } from './constants';

export function* setAlertSaga({ payload: id }) {
    yield delay(5000);
    yield put(resetAlerts(id));
}

export function* updateNetworkAlert({ payload }: ConnectionDataPayload) {
    const { type } = payload || {};
    const currentAlertId = yield select(getAlertId);

    if (currentAlertId === alertTypes.DEVICE_OFFLINE && type !== 'none') {
        yield put(resetAlerts(currentAlertId));
    } else if (type === 'none') {
        yield put(setAlert(alertTypes.DEVICE_OFFLINE));
    }
}

function* watchSetAlert() {
    // @ts-ignore
    yield takeLatest(SET_ALERT, setAlertSaga);
}

function* watchNetwork() {
    yield takeLatest(setConnectionType, updateNetworkAlert);
}

export const alertsSagas = [watchNetwork, watchSetAlert];
