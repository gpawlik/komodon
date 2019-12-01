// @flow
import { connect } from 'react-redux';

import { getEvents, getHasEvents, getIsLoadingEvents } from '~/domains/events/selectors';
import { fetchEvents } from '~/domains/events/actions';
import type { StateProps, DispatchProps } from './types';

import { EventListComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    events: getEvents(state),
    hasEvents: getHasEvents(state),
    isLoadingEvents: getIsLoadingEvents(state),
});

const mapDispatchToProps: DispatchProps = {
    fetchEvents,
};

export const EventList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventListComponent);
