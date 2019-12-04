// @flow
import { createAction } from 'redux-actions';

export const setSearchCriteria = createAction(`search/SET_SEARCH_CRITERIA`);
export const resetSearchCriteria = createAction(`search/RESET_SEARCH_CRITERIA`);

export const searchFlights = createAction('search/SEARCH_FLIGHTS');
