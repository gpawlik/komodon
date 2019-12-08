// @flow
import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getState = state => state.results || {};

export const getResults = createSelector([getState], state => state.results || {});

export const getItineraryResults = createSelector([getResults], results => results.itineraryResults || []);

export const getResultsById = createSelector([getItineraryResults], results => {
    const map = results.reduce((acc, item) => {
        acc[item.flightPrices.cheapest.id] = item.flightPrices.cheapest;
        acc[item.flightPrices.fastest.id] = item.flightPrices.fastest;
        acc[item.flightPrices.best.id] = item.flightPrices.best;

        return acc;
    }, {});

    return map;
});

const sortByPrice = R.sortBy(R.prop('price'));

export const getResultsSortByPrice = createSelector([getResultsById], results => {
    return sortByPrice(Object.values(results));
});
