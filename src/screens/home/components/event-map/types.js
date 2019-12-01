// @flow
import type { List, Map } from 'immutable';
import type { Coordinates as CoordinatesObject } from '~/domains/filters/types';

type Coordinates = 'latitude' | 'longitude' | 'latitudeDelta' | 'longitudeDelta';

export type StateProps = {
    events: List<Map<*, *>>,
    mapCoordinates: Map<Coordinates, number>,
    hasAutoRefresh: boolean,
};

export type DispatchProps = {
    fetchEvents: ({ coordinates: CoordinatesObject }) => void,
};

export type Props = StateProps & DispatchProps;

export type MapChangeProps = {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
};

export type State = {
    region: MapChangeProps,
    refreshOnChange: boolean,
    hasBeenChanged: boolean,
};
