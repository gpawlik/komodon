// @flow
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

import { getIdFromProps } from '~/utils/selectors';

const getEventsState = state => state.events || Map();

export const getEvents = createSelector(
    [getEventsState],
    state => state.get('items', List())
);

export const getHasEvents = createSelector(
    [getEvents],
    events => !!events.size
);

export const getIsLoadingEvents = createSelector(
    [getEventsState],
    state => state.get('isLoading', false)
);

export const getEventById = createSelector(
    [getEvents, getIdFromProps],
    (events, id) => events.find(item => item.get('id') === id, null, Map())
);

export const getEventTitle = createSelector(
    [getEventById],
    event => event.get('title', '')
);

export const getEventDescription = createSelector(
    [getEventById],
    event => event.get('description', '')
);

export const getEventLocation = createSelector(
    [getEventById],
    event => event.get('location', '')
);

export const getEventTime = createSelector(
    [getEventById],
    event => event.get('timestamp', '')
);

export const getEventStart = createSelector(
    [getEventById],
    event => event.get('event_start', '')
);

export const getEventEnd = createSelector(
    [getEventById],
    event => event.get('event_end', '')
);

export const getEventContent = createSelector(
    [getEventById],
    event => event.get('content', '')
);

export const getMapCoordinates = createSelector(
    [getEventsState],
    state => state.get('mapCoordinates', Map())
);

export const getOrganizer = createSelector(
    [getEventById],
    event => event.get('organizer', '')
);

export const getOrganizerUrl = createSelector(
    [getEventById],
    event => event.get('organizer_url', '')
);

export const getEventUrl = createSelector(
    [getEventById],
    event => event.get('event_url', '')
);

export const getImageUrl = createSelector(
    [getEventById],
    event => event.get('event_image', '')
);
