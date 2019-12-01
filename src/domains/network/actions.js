// @flow
import { createAction } from 'redux-actions';

const prefix = 'komodon/network';
export const setConnectionType = createAction(`${prefix}/SET_CONNECTION_TYPE`);
