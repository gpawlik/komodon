// @flow
import { GET_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS } from './constants';
import { result } from '~/domains/subscriptions/mock';

type State = {
    results: Array<*>,
    isLoading: boolean,
};

export const initialState: State = {
    results: result,
    isLoading: false,
};

export const subscriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIPTIONS:
            return { ...state, isLoading: true };
        case RECEIVE_SUBSCRIPTIONS:
            const { payload } = action;
            return { ...state, results: payload, isLoading: false };
        default:
            return state;
    }
};
