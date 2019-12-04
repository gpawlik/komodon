// @flow
import { connect } from 'react-redux';

import { getResults } from '~/domains/destinations/selectors';
import { getDestinations } from '~/domains/destinations/actions';

import { DestinationBoxComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    destinations: getResults(state),
});

const mapDispatchToProps: DispatchProps = {
    getDestinations,
};

export const DestinationBox = connect(mapStateToProps, mapDispatchToProps)(DestinationBoxComponent);
