// @flow
import { Map } from 'immutable';
import { createSelector } from 'reselect';

const getAuthState = state => state.auth || Map();

export const getIsLoggedIn = createSelector(
    [getAuthState],
    state => state.get('isLoggedIn', false)
);
