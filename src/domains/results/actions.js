// @flow
import { createAction } from 'redux-actions';
import { RECEIVE_RESULTS } from './constants';

export const receiveResults = createAction(RECEIVE_RESULTS);
