import { put, select, takeLatest } from 'redux-saga/effects';

import { setConnectionType } from '~/domains/network/actions';
import { ConnectionDataPayload } from '~/domains/network/types';

import { getAlertId } from './selectors';
import { setAlert, resetAlerts } from './actions';
import { alertTypes, alertCategories } from './constants';

export function* updateNetworkAlert({ payload }: ConnectionDataPayload) {
    const { type } = payload || {};
    const currentAlertId = yield select(getAlertId);

    if (currentAlertId === alertTypes.DEVICE_OFFLINE && type !== 'none') {
        yield put(resetAlerts());
    } else if (type === 'none') {
        yield put(
            setAlert({
                id: alertTypes.DEVICE_OFFLINE,
                message: 'Your device is currently offline.',
                type: alertCategories.ERROR,
            }),
        );
    }
}

function* watchNetwork() {
    yield takeLatest(setConnectionType, updateNetworkAlert);
}

export const alertsSagas = [watchNetwork];