// @flow
import { createSelector } from 'reselect';

export const getState = state => state.subscriptions || {};

export const getSubscriptions = createSelector([getState], state => state.results || []);

export const getIsLoading = createSelector([getState], state => !!state.isLoading);
