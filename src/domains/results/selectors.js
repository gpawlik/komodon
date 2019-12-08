// @flow
import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getState = state => state.results || {};

export const getResults = createSelector([getState], state => state.results || {});

export const getIsLoading = createSelector([getState], state => !!state.isLoading);

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

export const getResultsByDuration = createSelector([getResultsByPrice], results => {
    return sortByDuration(results);
});

export const getPriceOfCheapest = createSelector([getResultsByPrice], results => {
    return (results[0] || {}).price;
});

export const getPriceOfFastest = createSelector([getResultsByDuration], results => {
    return (results[0] || {}).price;
});
