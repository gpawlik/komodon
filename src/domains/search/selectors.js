// @flow
import { createSelector } from 'reselect';

const getState = state => state.search || {};

export const getDeparturePlace = createSelector([getState], state => state.departurePlace || {});

export const getDestinationPlace = createSelector([getState], state => state.destinationPlace || {});

export const getDepartureDates = createSelector([getState], state => state.departureDates || {});

export const getReturnDates = createSelector([getState], state => state.returnDates || {});
