// @flow
import { createAction } from 'redux-actions';
import { SET_SEARCH_CRITERIA, RESET_SEARCH_CRITERIA } from './constants';

export const setSearchCriteria = createAction(SET_SEARCH_CRITERIA);
export const resetSearchCriteria = createAction(RESET_SEARCH_CRITERIA);

export const searchFlights = createAction('search/SEARCH_FLIGHTS');
