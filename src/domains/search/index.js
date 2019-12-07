// @flow
import { Map as ImmutableMap } from 'immutable';

import { SET_SEARCH_CRITERIA, RESET_SEARCH_CRITERIA } from './constants';

type State = ImmutableMap<string, *>;

const initialCriteria = ImmutableMap({
    departurePlace: {
        placeId: 'barcelona_es',
        placeName: 'Barcelona',
        placeCode: 'BCN',
    },
    destinationPlace: {
        placeId: 'madrid_es',
        placeName: 'Madrid',
        placeCode: 'MAD',
    },
    departureDates: {},
    returnDates: {},
});

export const initialState: State = ImmutableMap({
    criteria: initialCriteria,
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CRITERIA:
            const {
                payload: { type, value },
            } = action;
            return state.setIn(['criteria', type], value);
        case RESET_SEARCH_CRITERIA:
            return state.set('criteria', initialCriteria);
        default:
            return state;
    }
};
