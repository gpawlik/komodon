import { connect } from 'react-redux';

import { getIsLoading, getHasResults } from '~/domains/results/selectors';
import { getIsFlexibleSearch } from '~/domains/search/selectors';
import { ReduxState } from '~/types';

import { ResultsComponent } from './component';
import { StateProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    isLoading: getIsLoading(state),
    isFlexible: getIsFlexibleSearch(state),
    hasResults: getHasResults(state),
});

export const Results = connect(mapStateToProps, null)(ResultsComponent);
