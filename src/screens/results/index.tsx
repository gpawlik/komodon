import { connect } from 'react-redux';

import { getIsLoading, getHasResults } from '~/domains/results/selectors';
import { getState as getCriteria, getIsFlexibleSearch } from '~/domains/search/selectors';
import { searchFlights } from '~/domains/search/actions';
import { getCriteriaFromUrlParams } from '~/utils/url';
import { ReduxState } from '~/types';

import { ResultsComponent } from './component';
import { StateProps } from './types';

export const mapStateToProps = (state: ReduxState, props): StateProps => {
    const searchParams = props?.search;
    const criteria = searchParams ? getCriteriaFromUrlParams(searchParams) : getCriteria(state);

    return {
        isLoading: getIsLoading(state),
        isFlexible: getIsFlexibleSearch(state),
        hasResults: getHasResults(state),
        criteria,
    };
};

const mapDispatchToProps = {
    searchFlights,
};

export const Results = connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);
