// @flow
import { Map } from 'immutable';
import { createSelector } from 'reselect';

const getUiState = state => state.ui || Map();

export const getIsNavigationVisible = createSelector(
    [getUiState],
    state => state.get('isNavigationVisible', false)
);
