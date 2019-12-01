// @flow
import { NetInfo } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import { eventChannel, type Effect } from 'redux-saga';

import { setConnectionType } from './actions';
import type { ConnectionData } from './types';

const networkChannel = () =>
    eventChannel(emitter => {
        NetInfo.addEventListener('connectionChange', emitter);

        return () => {};
    });

export function* updateNetworkData(data: ConnectionData): Generator<Effect, *, *> {
    yield put(setConnectionType(data));
}

function* watchNetwork(): Generator<Effect, *, *> {
    const channel = yield call(networkChannel);
    yield takeLatest(channel, updateNetworkData);
}

export const networkSagas = [watchNetwork];
