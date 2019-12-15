// @flow
import { SEARCH_FLIGHTS } from '~/domains/search/constants';
import { RECEIVE_RESULTS } from './constants';
import { result } from '~/domains/results/mock';

import type { Results } from './types';

type ResultsState = {
    results: Results,
    isLoading: boolean,
};

export const initialState: ResultsState = {
    results: result,
    isLoading: false,
};

export const resultsReducer = (state: ResultsState = initialState, action) => {
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
