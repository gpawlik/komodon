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
            const currentlySaved = state.get('lastSearches');

            if (payload.departurePlace) {
                const filtered = currentlySaved.filter(
                    item => item && item.getIn && item.getIn(['placeId']) !== payload.departurePlace.placeId,
                );
                return state.set('lastSearches', filtered.push(fromJS(payload.departurePlace)));
            } else if (payload.destinationPlace) {
                const filtered = currentlySaved.filter(
                    item => item && item.getIn && item.getIn(['placeId']) !== payload.destinationPlace.placeId,
                );
                return state.set('lastSearches', filtered.push(fromJS(payload.destinationPlace)));
            }
            return state;
        }
        default:
            return state;
    }
};
