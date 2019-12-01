// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    isLoggedIn: false,
});

const actionHandlers = new Map([]);

export const authReducer = handleActions(actionHandlers, initialState);
