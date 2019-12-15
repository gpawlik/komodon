// @flow
import { SET_SEARCH_CRITERIA, RESET_SEARCH_CRITERIA } from './constants';
import { type CitySearch } from './types';

type State = {
    departurePlace: CitySearch,
    destinationPlace: CitySearch,
    departureDates: Object,
    returnDates: Object,
};

const initialCriteria = {
    departurePlace: {},
    destinationPlace: {},
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
