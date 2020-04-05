import {
    REQUEST_SUBSCRIPTIONS,
    RECEIVE_SUBSCRIPTIONS_SUCCESS,
    RECEIVE_SUBSCRIPTIONS_ERROR,
    DELETE_SUBSCRIPTION_SUCCESS,
    REQUEST_SUBSCRIPTION_HISTORY_SUCCESS,
} from './actions';

import { SubscriptionResults, HistoryResults } from './types';

interface State {
    results: SubscriptionResults;
    isLoading: boolean;
    history: HistoryResults;
}

export const initialState: State = {
    results: [],
    isLoading: false,
    history: {},
};

export const subscriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SUBSCRIPTIONS:
            return { ...state, isLoading: true };
        case RECEIVE_SUBSCRIPTIONS_SUCCESS:
            const { payload } = action;
            return { ...state, results: payload, isLoading: false };
        case RECEIVE_SUBSCRIPTIONS_ERROR:
            return { ...state, isLoading: false };
        case DELETE_SUBSCRIPTION_SUCCESS:
            const { payload: id } = action;
            return { ...state, results: state.results.filter(item => item.id !== id) };

        case REQUEST_SUBSCRIPTION_HISTORY_SUCCESS: {
            const {
                payload: { id, result },
            } = action;
            return { ...state, history: { ...history, [id]: result } };
        }

        default:
            return state;
    }
};
