// @flow
import { Map } from 'immutable';
import { createSelector } from 'reselect';

const getUserState = state => state.user || Map();

export const getUserFirstName = createSelector(
    [getUserState],
    state => state.get('firstName', '')
);

export const getUserSecondName = createSelector(
    [getUserState],
    state => state.get('secondName', '')
);

export const getUserLocation = createSelector(
    [getUserState],
    state => state.get('location', '')
);

export const getUserIsActive = createSelector(
    [getUserState],
    state => state.get('isActive', false)
);
