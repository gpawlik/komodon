// @flow
import { Map as ImmutableMap, List } from 'immutable';
import { createSelector } from 'reselect';

const getAlertsState = state => state.alerts || ImmutableMap();

export const getAlert = createSelector(
    [getAlertsState],
    state => state.get('alert', List())
);

export const getAlertId = createSelector(
    [getAlert],
    alert => alert.get('id', '')
);

export const getAlertText = createSelector(
    [getAlert],
    alert => alert.get('message', '')
);

export const getAlertType = createSelector(
    [getAlert],
    alert => alert.get('type', '')
);
