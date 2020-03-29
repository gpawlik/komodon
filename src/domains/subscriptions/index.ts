import {
    REQUEST_SUBSCRIPTIONS,
    RECEIVE_SUBSCRIPTIONS_SUCCESS,
    RECEIVE_SUBSCRIPTIONS_ERROR,
    DELETE_SUBSCRIPTION_SUCCESS,
} from './actions';

import { SubscriptionResults } from './types';

interface State {
    results: SubscriptionResults;
    isLoading: boolean;
}

export const initialState: State = {
    results: [],
    isLoading: false,
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
        default:
            return state;
    }
};
