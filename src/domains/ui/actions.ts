import { createAction } from 'redux-actions';

const prefix = 'komodon/ui';
export const toggleNavigation = createAction(`${prefix}/TOGGLE_NAVIGATION`);
