import { SEARCH_FLIGHTS } from '~/domains/search/constants';
import { RECEIVE_RESULTS } from './constants';

import { Results } from './types';

interface ResultsState {
    results: Results;
    isLoading: boolean;
}

export const initialState: ResultsState = {
    results: {
        id: '',
        currency: 'EUR',
        departure: '',
        destination: '',
    },
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
