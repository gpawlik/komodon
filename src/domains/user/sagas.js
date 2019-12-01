// @flow
import { select, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { changeActive } from './actions';
import { getUserFirstName } from './selectors';

import type { ChangeActivePayload } from './types';

export function* changeActiveSaga({ payload: { value } }: ChangeActivePayload): Generator<Effect, *, *> {
    const firstName = yield select(getUserFirstName);

    console.log(firstName, value);
}

function* watchChangeActive(): Generator<Effect, *, *> {
    yield takeEvery(changeActive, changeActiveSaga);
}

export const userSagas = [watchChangeActive];
