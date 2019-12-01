// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { setAlert, resetAlerts } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    alert: ImmutableMap(),
});

const actionHandlers = new Map([
    [setAlert, handleReduce((state, { payload }) => state.set('alert', ImmutableMap(payload)))],
    [resetAlerts, handleReduce(state => state.set('alert', ImmutableMap()))],
]);

export const alertsReducer = handleActions(actionHandlers, initialState);
