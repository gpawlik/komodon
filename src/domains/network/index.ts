import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { setConnectionType } from './actions';
import { connectionTypes, effectiveConnectionTypes } from './constants';
import { ConnectionDataPayload } from './types';

type State = ImmutableMap<string, any>;

export const initialState: State = ImmutableMap({
    type: connectionTypes.UNKNOWN,
    effectiveType: effectiveConnectionTypes.UNKNOWN,
});

const actionHandlers = new Map([
    [
        setConnectionType,
        handleReduce((state, { payload: { type, effectiveType } }: ConnectionDataPayload) =>
            state.withMutations(state => state.set('type', type).set('effectiveType', effectiveType)),
        ),
    ],
]);

export const networkReducer = handleActions(actionHandlers, initialState);
