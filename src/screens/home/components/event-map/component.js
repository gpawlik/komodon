// @flow
import * as React from 'react';
import { Marker } from 'react-native-maps';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Marker as CustomMarker } from '~/components/marker';
import { CustomCallout } from '~/components/callout';
import { Zoom } from '~/components/zoom';

import { Refresh } from './components/refresh';
import { FloatingButton } from '../floating-button';

import { Container, Map } from './styles';
import type { Props, State, MapChangeProps } from './types';

export class EventMapComponent extends React.PureComponent<Props, State> {
    state = {
        region: {
            latitude: this.props.mapCoordinates.get('latitude', 0),
            longitude: this.props.mapCoordinates.get('longitude', 0),
            latitudeDelta: this.props.mapCoordinates.get('latitudeDelta', 0),
            longitudeDelta: this.props.mapCoordinates.get('longitudeDelta', 0),
        },
        refreshOnChange: false,
        hasBeenChanged: false,
    };

    map: React.ElementRef<typeof Map>;
    hasFirstLoaded: boolean = false;

    componentDidMount = () => {
        !this.props.hasAutoRefresh && this.refreshResults();
    };

    refreshResults = () => {
        const { fetchEvents } = this.props;
        const {
            region: { latitude, longitude, latitudeDelta, longitudeDelta },
        } = this.state;

        fetchEvents({
            coordinates: {
                minLat: latitude - latitudeDelta / 2,
                maxLat: latitude + latitudeDelta / 2,
                minLng: longitude - longitudeDelta / 2,
                maxLng: longitude + longitudeDelta / 2,
            },
        });
    };

    onRegionChangeComplete = ({ latitude, longitude, latitudeDelta, longitudeDelta }: MapChangeProps) => {
        this.setState(
            state => ({
                region: { ...state.region, latitude, longitude },
                hasBeenChanged: this.hasFirstLoaded,
            }),
            () => {
                if (this.props.hasAutoRefresh) {
                    this.refreshResults();
                }
                this.hasFirstLoaded = true;
            }
        );
    };

    onZoom = (coef: number) => {
        const { region } = this.state;
        const zoom = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * coef,
            longitudeDelta: region.longitudeDelta * coef,
        };
        this.setState({ region: zoom }, this.map.animateToRegion(zoom, 100));
    };

    onZoomIn = () => this.onZoom(3 / 2);

    onZoomOut = () => this.onZoom(2 / 3);

    handleShowFilters = () => navigate.showModal(routes.filters);

    render() {
        const { events, hasAutoRefresh } = this.props;
        const { region, hasBeenChanged } = this.state;

        return (
            <Container>
                <Map
                    ref={ref => (this.map = ref)}
                    initialRegion={region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    showsBuildings={false}
                    loadingEnabled
                >
                    {events.map(marker => (
                        <Marker
                            key={marker.get('id')}
                            coordinate={{
                                longitude: Number(marker.get('longitude', 0)),
                                latitude: Number(marker.get('latitude', 0)),
                            }}
                        >
                            <CustomMarker category={marker.get('category', '')} />
                            <CustomCallout
                                id={marker.get('id')}
                                title={marker.get('title')}
                                organizer={marker.get('organizer')}
                                start={marker.get('event_start')}
                                end={marker.get('event_end')}
                            />
                        </Marker>
                    ))}
                </Map>
                {!hasAutoRefresh ? <Refresh isActive={hasBeenChanged} onRefresh={this.refreshResults} /> : null}
                <Zoom onZoomIn={this.onZoomIn} onZoomOut={this.onZoomOut} />
                <FloatingButton message="Filters" onPress={this.handleShowFilters} />
            </Container>
        );
    }
}
