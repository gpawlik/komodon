import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS } from './constants';
import { result } from '~/domains/subscriptions/mock';

interface State {
    results: Array<any>;
    isLoading: boolean;
}

export const initialState: State = {
    results: result,
    isLoading: false,
};

export const subscriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SUBSCRIPTIONS:
            return { ...state, isLoading: true };
        case RECEIVE_SUBSCRIPTIONS:
            const { payload } = action;
            return { ...state, results: payload, isLoading: false };
        default:
            return state;
    }
};
