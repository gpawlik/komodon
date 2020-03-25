import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getFilters } from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';
import { ReduxState } from '~/types';

import { FiltersModalComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    filters: getFilters(state),
});

const mapDispatchToProps: DispatchProps = {
    setSearchCriteria,
};

export const FiltersModal = connect(mapStateToProps, mapDispatchToProps)(FiltersModalComponent);
