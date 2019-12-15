// @flow
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getFilters } from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';

import { FiltersModalComponent } from './component';
import type { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    filters: getFilters(state),
});

const mapDispatchToProps: DispatchProps = {
    setSearchCriteria,
};

export const FiltersModal = connect(mapStateToProps, mapDispatchToProps)(FiltersModalComponent);
