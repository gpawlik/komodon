// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { GET_DESTINATIONS, GET_DESTINATIONS_SUCCESS, GET_DESTINATIONS_ERROR } from './constants';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    destinations: ImmutableList(),
});

export const destinationsReducer = (state: State = initialState, action: DestinationsAction) => {
    switch (action.type) {
        case GET_DESTINATIONS_SUCCESS: {
            const { payload } = action;
            console.log({ payload });
            return state.set('destinations', fromJS(payload));
        }
        case GET_DESTINATIONS_ERROR: {
            return state.set('destinations', ImmutableList());
        }
        default:
            return state;
    }
};
