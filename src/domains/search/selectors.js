// @flow
import { Map as ImmutableMap, List } from 'immutable';
import { createSelector } from 'reselect';

const getState = state => state.search || ImmutableMap();

export const getCriteria = createSelector([getState], state => state.get('criteria', List()));

export const getDeparturePlace = createSelector([getCriteria], state => state.get('departurePlace', {}));

export const getDestinationPlace = createSelector([getCriteria], state => state.get('destinationPlace', {}));

export const getDepartureDates = createSelector([getCriteria], state => state.get('departureDates', {}));

export const getReturnDates = createSelector([getCriteria], state => state.get('returnDates', {}));
