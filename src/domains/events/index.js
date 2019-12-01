// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap, List, fromJS } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { fetchEvents, receiveEvents } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    items: List(),
    mapCoordinates: ImmutableMap({
        latitude: 41.149318,
        longitude: -8.611385,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    }),
    isLoading: false,
});

const actionHandlers = new Map([
    [fetchEvents, handleReduce(state => state.set('isLoading', true))],
    [
        receiveEvents,
        handleReduce((state, { payload: { events } }) => state.set('items', fromJS(events)).set('isLoading', false)),
    ],
]);

export const eventsReducer = handleActions(actionHandlers, initialState);
