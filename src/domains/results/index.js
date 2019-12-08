// @flow
import { Map as ImmutableMap } from 'immutable';

import { RECEIVE_RESULTS } from './constants';
import { result } from '~/domains/results/mock';

type State = ImmutableMap<string, *>;

export const initialState: State = {
    results: result,
};

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RESULTS:
            const { payload } = action;
            return { ...state, results: payload };
        default:
            return state;
    }
};
