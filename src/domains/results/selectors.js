// @flow
import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getState = state => state.results || {};

export const getResults = createSelector([getState], state => state.results || {});

export const getItineraryResults = createSelector([getResults], results => results.itineraryResults || []);

export const getResultsById = createSelector([getItineraryResults], results => {
    const map = results.reduce((acc, item) => {
        acc[item.flightPrices.cheapest.id] = {
            ...item.flightPrices.cheapest,
            duration: item.flightPrices.cheapest.duration.total,
        };
        acc[item.flightPrices.fastest.id] = {
            ...item.flightPrices.fastest,
            duration: item.flightPrices.cheapest.duration.total,
        };
        acc[item.flightPrices.best.id] = {
            ...item.flightPrices.best,
            duration: item.flightPrices.cheapest.duration.total,
        };

        return acc;
    }, {});

    return map;
});

const sortByPrice = R.sortBy(R.prop('price'));
const sortByDuration = R.sortBy(R.prop('duration'));

export const getResultsByPrice = createSelector([getResultsById], results => {
    return sortByPrice(Object.values(results));
});

export const getResultsByDuration = createSelector([getResultsById], results => {
    return sortByDuration(Object.values(results));
});
