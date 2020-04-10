import { SET_SEARCH_CRITERIA, RESET_SEARCH_CRITERIA } from './constants';
import { State } from './types';

const initialCriteria = {
    departurePlace: {},
    destinationPlace: {},
    departureDates: {},
    departureDaysOfWeek: [],
    returnDates: {},
    returnDaysOfWeek: [],
    daysRange: {},
    departureText: '',
    returnText: '',
    roundTrip: true,
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
