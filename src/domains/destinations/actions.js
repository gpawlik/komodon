// @flow
import { createAction } from 'redux-actions';

import { GET_DESTINATIONS, GET_DESTINATIONS_SUCCESS, GET_DESTINATIONS_ERROR } from './constants';

export const getDestinations = createAction(GET_DESTINATIONS);
export const getDestinationsSuccess = createAction(GET_DESTINATIONS_SUCCESS);
export const getDestinationsError = createAction(GET_DESTINATIONS_ERROR);
