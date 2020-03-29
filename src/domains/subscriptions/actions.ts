import { SubscriptionPayload, SubscriptionResults } from './types';

export const REQUEST_SUBSCRIPTIONS: 'subscriptions/REQUEST' = 'subscriptions/REQUEST';
export const requestSubscriptions = () => ({
    type: REQUEST_SUBSCRIPTIONS,
});

export const RECEIVE_SUBSCRIPTIONS_SUCCESS: 'subscriptions/RECEIVE_SUCCESS' = 'subscriptions/RECEIVE_SUCCESS';
export const receiveSubscriptionsSuccess = (payload: SubscriptionResults) => ({
    type: RECEIVE_SUBSCRIPTIONS_SUCCESS,
    payload,
});

export const RECEIVE_SUBSCRIPTIONS_ERROR: 'subscriptions/RECEIVE_ERROR' = 'subscriptions/RECEIVE_ERROR';
export const receiveSubscriptionsError = () => ({
    type: RECEIVE_SUBSCRIPTIONS_ERROR,
});

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

export const DELETE_SUBSCRIPTION_ATTEMPT: 'subscriptions/DELETE_ATTEMPT' = 'subscriptions/DELETE_ATTEMPT';
export const deleteSubscription = (payload: string) => ({
    type: DELETE_SUBSCRIPTION_ATTEMPT,
    payload,
});

export const DELETE_SUBSCRIPTION_SUCCESS: 'subscriptions/DELETE_SUCCESS' = 'subscriptions/DELETE_SUCCESS';
export const deleteSubscriptionSuccess = (payload: string) => ({
    type: DELETE_SUBSCRIPTION_SUCCESS,
    payload,
});

export const DELETE_SUBSCRIPTION_ERROR: 'subscriptions/DELETE_ERROR' = 'subscriptions/DELETE_ERROR';
export const deleteSubscriptionError = () => ({
    type: DELETE_SUBSCRIPTION_ERROR,
});
