import { createAction } from 'redux-actions';
import { GET_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS } from './constants';

export const getResults = createAction(GET_SUBSCRIPTIONS);
export const receiveResults = createAction(RECEIVE_SUBSCRIPTIONS);
