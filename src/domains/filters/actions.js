// @flow
import { createAction } from 'redux-actions';

const prefix = 'komodon/filters';
export const selectFilter = createAction(`${prefix}/SELECT_FILTER`);
