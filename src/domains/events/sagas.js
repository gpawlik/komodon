// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';
import { getTimeBoundaries } from '~/utils/time';
import type { SelectFilterPayload } from '~/domains/filters/types';

import * as api from './api';
import { fetchEvents, receiveEvents } from './actions';

export function* getEventsSaga({
    payload: { filters, coordinates } = {},
}: SelectFilterPayload): Generator<Effect, *, *> {
    const { categories, timeSlot } = filters || {};
    const [minTime, maxTime] = getTimeBoundaries(timeSlot);

    const [events = {}] = yield call(handleApi(api.getEvents), {
        filters: { categories, minTime, maxTime },
        coordinates,
    });

    yield put(receiveEvents({ events }));
}

function* watchFetchEvents(): Generator<Effect, *, *> {
    yield takeEvery(fetchEvents, getEventsSaga);
}

export const eventsSagas = [watchFetchEvents];
