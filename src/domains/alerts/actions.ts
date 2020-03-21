import { createAction } from 'redux-actions';

const prefix = 'komodon/alerts';
export const setAlert = createAction(`${prefix}/SET_ALERT`);
export const resetAlerts = createAction(`${prefix}/RESET_ALERTS`);
