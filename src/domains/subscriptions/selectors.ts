import { createSelector } from 'reselect';

import { getIdFromProps } from '~/utils/selectors';

export const getState = state => state.subscriptions || {};

export const getSubscriptions = createSelector([getState], state => state.results || []);

export const getCriteriaById = createSelector(
    [getSubscriptions, getIdFromProps],
    (subscriptions, id) => subscriptions.find(item => item.id === id) || {},
);

export const getIsLoading = createSelector([getState], state => !!state.isLoading);

export const getSubscriptionHistory = createSelector([getState], state => state.currentHistory || []);

export const getIsLoadingHistory = createSelector([getState], state => !!state.isLoadingHistory);
