import { Map as ImmutableMap, List } from 'immutable';
import { createSelector } from 'reselect';

const getDestinationsState = state => state.destinations || ImmutableMap();

export const getResults = createSelector([getDestinationsState], state => state.get('destinations', List()));

export const getLastSearches = createSelector([getDestinationsState], state => state.get('lastSearches', List()));
