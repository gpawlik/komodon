// @flow
import { createAction } from 'redux-actions';

const prefix = 'komodon/search';
export const setSearchCriteria = createAction(`${prefix}/SET_SEARCH_CRITERIA`);
export const resetSearchCriteria = createAction(`${prefix}/RESET_SEARCH_CRITERIA`);
