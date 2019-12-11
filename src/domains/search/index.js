// @flow
import { Map as ImmutableMap } from 'immutable';

import { SET_SEARCH_CRITERIA, RESET_SEARCH_CRITERIA } from './constants';

type State = ImmutableMap<string, *>;

const initialCriteria = {
    departurePlace: {
        placeId: 'barcelona_es',
        placeName: 'Barcelona',
        placeCode: 'BCN',
        countryName: 'Spain',
    },
    destinationPlace: {
        placeId: 'madrid_es',
        placeName: 'Madrid',
        placeCode: 'MAD',
        countryName: 'Spain',
    },
    departureDates: {},
    returnDates: {},
};

export const initialState: State = initialCriteria;

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CRITERIA:
            const { payload } = action;
            return { ...state, ...payload };
        case RESET_SEARCH_CRITERIA:
            return initialCriteria;
        default:
            return state;
    }
};
