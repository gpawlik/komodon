// @flow
import { createAction } from 'redux-actions';

const prefix = 'papagaio/filters';
export const selectFilter = createAction(`${prefix}/SELECT_FILTER`);
