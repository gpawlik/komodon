// @flow
import { createSelector } from 'reselect';

export const getState = state => state.results || {};

export const getResults = createSelector([getState], state => state.results || {});
