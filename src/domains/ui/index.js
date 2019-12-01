// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';
import { handleReduce } from '../../utils/handle-reduce';

import { toggleNavigation } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    isNavigationVisible: false,
});

const actionHandlers = new Map([
    [
        toggleNavigation,
        handleReduce((state, { payload: { isVisible } }) => state.set('isNavigationVisible', isVisible)),
    ],
]);

export const uiReducer = handleActions(actionHandlers, initialState);
