// @flow
import { connect } from 'react-redux';

import { getEvents, getMapCoordinates } from '~/domains/events/selectors';
import { fetchEvents } from '~/domains/events/actions';
import type { StateProps, DispatchProps } from './types';

import { EventMapComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    events: getEvents(state),
    mapCoordinates: getMapCoordinates(state),
    hasAutoRefresh: false,
});

const mapDispatchToProps: DispatchProps = {
    fetchEvents,
};

export const EventMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventMapComponent);
