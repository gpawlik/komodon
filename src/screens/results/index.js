// @flow
import { connect } from 'react-redux';

import { getResultsByPrice, getResultsByDuration, getIsLoading } from '~/domains/results/selectors';

import { ResultsComponent } from './component';
import type { StateProps } from './types';

export const mapStateToProps = (state: any): StateProps => ({
    resultsByPrice: getResultsByPrice(state),
    resultsByDuration: getResultsByDuration(state),
    isLoading: getIsLoading(state),
});

export const Results = connect(mapStateToProps, null)(ResultsComponent);
