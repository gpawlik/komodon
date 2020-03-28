import { createSelector } from 'reselect';

const getAuthState = state => state.auth || {};

export const getIsLoggedIn = createSelector([getAuthState], state => state.isLoggedIn || false);

export const getUsername = createSelector([getAuthState], state => state.username || '');
