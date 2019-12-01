// @flow
import { createAction } from 'redux-actions';

const prefix = 'papagaio/user';
export const changeActive = createAction(`${prefix}/CHANGE_ACTIVE`);
