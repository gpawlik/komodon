import { createAction } from 'redux-actions';
import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS } from './constants';
import { SubscriptionPayload } from './types';

export const requestSubscriptions = createAction(REQUEST_SUBSCRIPTIONS);
export const receiveSubscriptions = createAction(RECEIVE_SUBSCRIPTIONS);

export const CREATE_SUBSCRIPTION_ATTEMPT: 'subscriptions/CREATE_ATTEMPT' = 'subscriptions/CREATE_ATTEMPT';
export const createSubscription = (payload: SubscriptionPayload) => ({
    type: CREATE_SUBSCRIPTION_ATTEMPT,
    payload,
});

export const CREATE_SUBSCRIPTION_SUCCESS: 'subscriptions/CREATE_SUCCESS' = 'subscriptions/CREATE_SUCCESS';
export const createSubscriptionSuccess = (payload: string) => ({
    type: CREATE_SUBSCRIPTION_SUCCESS,
    payload,
});

export const CREATE_SUBSCRIPTION_ERROR: 'subscriptions/CREATE_ERROR' = 'subscriptions/CREATE_ERROR';
export const createSubscriptionError = () => ({
    type: CREATE_SUBSCRIPTION_ERROR,
});
