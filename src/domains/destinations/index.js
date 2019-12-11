// @flow

import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';

import { GET_DESTINATIONS_SUCCESS, GET_DESTINATIONS_ERROR, RESET_DESTINATIONS } from './constants';
import { SET_SEARCH_CRITERIA } from '~/domains/search/constants';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    destinations: ImmutableList(),
    lastSearches: ImmutableList(),
});

export const destinationsReducer = (state: State = initialState, action: DestinationsAction) => {
    switch (action.type) {
        case GET_DESTINATIONS_SUCCESS: {
            const { payload } = action;
            console.log({ payload });
            return state.set('destinations', fromJS(payload));
        }
        case GET_DESTINATIONS_ERROR:
        case RESET_DESTINATIONS: {
            return state.set('destinations', ImmutableList());
        }
        case SET_SEARCH_CRITERIA: {
            const { payload } = action;
            if (!payload.departurePlace && !payload.destinationPlace) {
                return state;
            }
            const currentlySaved = state.get('lastSearches');
            const filtered = currentlySaved.filter(
                item =>
                    item.getIn(['placeId']) !== payload.departurePlace.placeId &&
                    item.getIn(['placeId']) !== payload.destinationPlace.placeId,
            );
            return state.set(
                'lastSearches',
                filtered.push(fromJS(payload.departurePlace)).push(fromJS(payload.destinationPlace)),
            );
        }
        default:
            return state;
    }
};
