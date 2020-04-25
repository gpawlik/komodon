import { connect } from 'react-redux';

import {
    getState as getCriteria,
    getDeparturePlace,
    getDestinationPlace,
    getDepartureDates,
    getReturnDates,
    getRoundTrip,
    getDepartureText,
    getReturnText,
    getValidatedCriteria,
} from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';
import { ReduxState } from '~/types';

import { SearchboxComponent } from './component';

export const mapStateToProps = (state: ReduxState) => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
    roundTrip: getRoundTrip(state),
    criteria: getCriteria(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
    validatedCriteria: getValidatedCriteria(state),
});

const mapDispatchToProps = {
    setSearchCriteria,
};

export const Searchbox = connect(mapStateToProps, mapDispatchToProps)(SearchboxComponent);
