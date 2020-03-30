import { createSelector } from 'reselect';

const getAlertsState = state => state.alerts || {};

export const getAlert = createSelector([getAlertsState], state => state.alert || {});

export const getAlertId = createSelector([getAlert], alert => alert.id || '');

export const getAlertText = createSelector([getAlert], alert => alert.message || '');

export const getAlertType = createSelector([getAlert], alert => alert.type || '');
