// @flow
import { createAction } from 'redux-actions';

const prefix = 'papagaio/network';
export const setConnectionType = createAction(`${prefix}/SET_CONNECTION_TYPE`);
