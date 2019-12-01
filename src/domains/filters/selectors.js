// @flow
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

const getFiltersState = state => state.filters || Map();

export const getFilters = createSelector(
    [getFiltersState],
    state => state.get('filters', Map())
);

export const getFilterCategories = createSelector(
    [getFilters],
    filters => filters.get('categories', List())
);

export const getFilterTimeSlot = createSelector(
    [getFilters],
    filters => filters.get('timeSlot', 1)
);
