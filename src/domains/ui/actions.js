// @flow
import { createAction } from 'redux-actions';

const prefix = 'papagaio/ui';
export const toggleNavigation = createAction(`${prefix}/TOGGLE_NAVIGATION`);
