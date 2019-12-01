// @flow
import { createAction } from 'redux-actions';

const prefix = 'papagaio/events';
export const fetchEvents = createAction(`${prefix}/FETCH_EVENTS`);
export const receiveEvents = createAction(`${prefix}/RECEIVE_EVENTS`);
