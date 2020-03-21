import { select, takeEvery } from 'redux-saga/effects';

import { changeActive } from './actions';
import { getUserFirstName } from './selectors';

import { ChangeActivePayload } from './types';

export function* changeActiveSaga({ payload: { value } }: ChangeActivePayload) {
    const firstName = yield select(getUserFirstName);

    console.log(firstName, value);
}

function* watchChangeActive() {
    yield takeEvery(changeActive, changeActiveSaga);
}

export const userSagas = [watchChangeActive];
