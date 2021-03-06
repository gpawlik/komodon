import { connect } from 'react-redux';

import { getResults, getLastSearches } from '~/domains/destinations/selectors';
import { getDestinations } from '~/domains/destinations/actions';
import { ReduxState } from '~/types';

import { DestinationBoxComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    destinations: getResults(state),
    lastSearches: getLastSearches(state),
});

const mapDispatchToProps: DispatchProps = {
    getDestinations,
};

export const DestinationBox = connect(mapStateToProps, mapDispatchToProps)(DestinationBoxComponent);
