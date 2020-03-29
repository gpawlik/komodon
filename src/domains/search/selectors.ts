import * as R from 'ramda';
import { createSelector } from 'reselect';

import { searchOptions } from '~/domains/destinations/constants';
import { formatHourRange } from '~/utils/time';

import { ValidatedCriteria } from './types';

export const getState = state => state.search || {};

export const getDeparturePlace = createSelector([getState], state => state.departurePlace || {});

export const getDestinationPlace = createSelector([getState], state => state.destinationPlace || {});

export const getDepartureDates = createSelector([getState], state => state.departureDates || {});

export const getDepartureDaysOfWeek = createSelector([getState], state => state.departureDaysOfWeek || []);

export const getReturnDates = createSelector([getState], state => state.returnDates || {});

export const getReturnDaysOfWeek = createSelector([getState], state => state.returnDaysOfWeek || []);

export const getDaysRange = createSelector([getState], state => state.daysRange || {});

export const getRoundTrip = createSelector([getState], state => !!state.roundTrip);

export const getDepartureText = createSelector([getState], state => state.departureText || '');

export const getReturnText = createSelector([getState], state => state.returnText || '');

export const getFilters = createSelector([getState], state => state.filters || {});

export const getValidatedCriteria = createSelector(
    [getDeparturePlace, getDestinationPlace, getDepartureText, getReturnText],
    (departurePlace, destinationPlace, departureText, returnText): ValidatedCriteria => ({
        departurePlace: !!departurePlace.placeId,
        destinationPlace: !!destinationPlace.placeId,
        departureDate: !!departureText,
        returnDate: !!returnText,
    }),
);

export const getIsFlexibleSearch = createSelector(
    [getDestinationPlace],
    destination => destination.placeId === searchOptions.EVERYWHERE || false,
);

const notEmpty = R.compose(R.not, R.isEmpty);

export const getSubscriptionCriteria = createSelector(
    [getState],
    ({
        departurePlace,
        destinationPlace,
        roundTrip,
        departureDates,
        returnDates,
        departureDaysOfWeek,
        returnDaysOfWeek,
        daysRange,
        filters = {},
    }) => {
        return R.pickBy(notEmpty, {
            departurePlace: departurePlace.placeId,
            destinationPlace: destinationPlace.placeId,
            roundTrip,
            locale: 'en-US',
            departureDates,
            returnDates,
            departureDaysOfWeek,
            returnDaysOfWeek,
            daysRange,
            filter: {
                departureTime: formatHourRange(filters.departureTime),
                arrivalTime: formatHourRange(filters.arrivalTime),
                returnDepartureTime: formatHourRange(filters.returnDepartureTime),
                returnArrivalTime: formatHourRange(filters.returnArrivalTime),
                stops: filters.stops,
            },
        });
    },
);
