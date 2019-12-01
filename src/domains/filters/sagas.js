// @flow
import { put, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { fetchEvents } from '~/domains/events/actions';

import { selectFilter } from './actions';

import type { SelectFilterPayload } from './types';

export function* selectFilterSaga({ payload: { filters } }: SelectFilterPayload): Generator<Effect, *, *> {
    yield put(fetchEvents({ filters }));
}

function* watchSelectFilter(): Generator<Effect, *, *> {
    yield takeEvery(selectFilter, selectFilterSaga);
}

export const filtersSagas = [watchSelectFilter];
