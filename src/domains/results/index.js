// @flow
import { Map as ImmutableMap } from 'immutable';

import { SEARCH_FLIGHTS } from '~/domains/search/constants';
import { RECEIVE_RESULTS } from './constants';
import { result } from '~/domains/results/mock';

type State = ImmutableMap<string, *>;

export const initialState: State = {
    results: result,
    isLoading: false,
};

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FLIGHTS:
            return { ...state, isLoading: true };
        case RECEIVE_RESULTS:
            const { payload } = action;
            return { ...state, results: payload, isLoading: false };
        default:
            return state;
    }
};
