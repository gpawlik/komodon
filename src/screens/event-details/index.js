// @flow
import { connect } from 'react-redux';

import {
    getEventTitle,
    getEventLocation,
    getEventStart,
    getEventContent,
    getOrganizer,
    getOrganizerUrl,
    getEventUrl,
    getImageUrl,
} from '~/domains/events/selectors';
import type { OwnProps, StateProps } from './types';

import { EventDetailsComponent } from './component';

export const mapStateToProps = (state: any, { id }: OwnProps): StateProps => ({
    title: getEventTitle(state, { id }),
    location: getEventLocation(state, { id }),
    eventStart: getEventStart(state, { id }),
    content: getEventContent(state, { id }),
    organizer: getOrganizer(state, { id }),
    organizerUrl: getOrganizerUrl(state, { id }),
    eventUrl: getEventUrl(state, { id }),
    imageUrl: getImageUrl(state, { id }),
});

export const EventDetails = connect(mapStateToProps)(EventDetailsComponent);
