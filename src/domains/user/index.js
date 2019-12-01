// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

import { handleReduce } from '../../utils/handle-reduce';

import { changeActive } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    firstName: 'Greg',
    secondName: 'Pawlik',
    location: 'Porto, Portugal',
    isActive: false,
});

const actionHandlers = new Map([
    [changeActive, handleReduce((state, { payload: { value } }) => state.set('isActive', value))],
]);

export const userReducer = handleActions(actionHandlers, initialState);
