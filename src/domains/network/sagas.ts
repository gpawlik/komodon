//import { NetInfo } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { setConnectionType } from './actions';
import { ConnectionData } from './types';

const networkChannel = () =>
    eventChannel(emitter => {
        //NetInfo.addEventListener('connectionChange', emitter);

        return () => {};
    });

export function* updateNetworkData(data: ConnectionData) {
    yield put(setConnectionType(data));
}

function* watchNetwork() {
    const channel = yield call(networkChannel);
    yield takeLatest(channel, updateNetworkData);
}

export const networkSagas = [watchNetwork];
