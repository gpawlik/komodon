import { createSelector } from 'reselect';

export const getState = state => state.subscriptions || {};

export const getSubscriptions = createSelector([getState], state => state.results || []);

export const getIsLoading = createSelector([getState], state => !!state.isLoading);

export const getSubscriptionHistory = createSelector([getState], state => state.currentHistory || []);

export const getIsLoadingHistory = createSelector([getState], state => !!state.isLoadingHistory);
