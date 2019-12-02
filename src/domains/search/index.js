// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { setSearchCriteria, resetSearchCriteria } from './actions';

type State = ImmutableMap<string, *>;

const initialCriteria = ImmutableMap({
    departurePlace: 'BCN',
    destinationPlace: 'MAD',
    departureDates: '12 DEC - 14 DEC',
});

export const initialState: State = ImmutableMap({
    criteria: initialCriteria,
});

const actionHandlers = new Map([
    [setSearchCriteria, handleReduce((state, { payload: { type, value } }) => state.setIn(['criteria', type], value))],
    [resetSearchCriteria, handleReduce(state => state.set('criteria', initialCriteria))],
]);

export const searchReducer = handleActions(actionHandlers, initialState);
