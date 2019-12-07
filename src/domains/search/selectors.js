// @flow
import { createSelector } from 'reselect';

export const getState = state => state.search || {};

export const getDeparturePlace = createSelector([getState], state => state.departurePlace || {});

export const getDestinationPlace = createSelector([getState], state => state.destinationPlace || {});

export const getDepartureDates = createSelector([getState], state => state.departureDates || {});

export const getDepartureDaysOfWeek = createSelector([getState], state => state.departureDaysOfWeek || []);

export const getReturnDates = createSelector([getState], state => state.returnDates || {});

export const getReturnDaysOfWeek = createSelector([getState], state => state.returnDaysOfWeek || []);

export const getDaysRange = createSelector([getState], state => state.daysRange || {});

export const getDepartureText = createSelector([getState], state => state.departureText || '');

export const getReturnText = createSelector([getState], state => state.returnText || '');

export const getFilters = createSelector([getState], state => state.filters || {});
