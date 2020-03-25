import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace } from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';
import { resetDestinations } from '~/domains/destinations/actions';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { SectionBox } from '~/components/section-box';
import { Button } from '~/components/button';
import { ReduxState } from '~/types';

import { DestinationBox } from './components/destination-box';
import { Container, ConfirmBox } from './styles';

export const SearchPlaceModalComponent = props => {
    const [departurePlace, onDepartureChange] = React.useState(props.departurePlace);
    const [destinationPlace, onDestinationChange] = React.useState(props.destinationPlace);

    const [focusedField, onFocus] = React.useState(props.navigation.getParam('focused'));

    const isDeparture = focusedField === 0;
    const isDestination = focusedField === 1;

    const onSubmitDeparture = () => {
        props.setSearchCriteria({ departurePlace });
        if (destinationPlace && destinationPlace.placeId) {
            closeModal();
        } else {
            onFocusTab(1);
        }
    };

    const onSubmitDestination = () => {
        props.setSearchCriteria({ destinationPlace });
        if (departurePlace && departurePlace.placeId) {
            closeModal();
        } else {
            onFocusTab(0);
        }
    };

    const closeModal = () => props.navigation.goBack();

    const onFocusTab = index => {
        props.resetDestinations();
        onFocus(index);
    };

    const handleDepartureChange = value => {
        props.resetDestinations();
        onDepartureChange(value);
    };

    const handleDestinationChange = value => {
        props.resetDestinations();
        onDestinationChange(value);
    };

    return (
        <Container>
            <Header backIcon={generalIcons.CLOSE} backAction={closeModal} />
            <SectionBox
                label1="Departure city"
                text1={departurePlace.placeName || 'Select city'}
                label2="Destination city"
                text2={destinationPlace.placeName || 'Select city'}
                selectedIndex={focusedField}
                onChange={onFocusTab}
                roundTrip
            />

            {isDeparture ? (
                <DestinationBox
                    value={departurePlace}
                    onValueChange={handleDepartureChange}
                    exludePlaceId={destinationPlace.placeId}
                />
            ) : null}

            {isDestination ? (
                <DestinationBox
                    value={destinationPlace}
                    onValueChange={handleDestinationChange}
                    exludePlaceId={departurePlace.placeId}
                    isDestination
                />
            ) : null}

            <ConfirmBox>
                {isDeparture ? (
                    <Button
                        message="Select departure"
                        onPress={onSubmitDeparture}
                        isDisabled={!departurePlace.placeName}
                    />
                ) : (
                    <Button
                        message="Select destination"
                        onPress={onSubmitDestination}
                        isDisabled={!destinationPlace.placeName}
                    />
                )}
            </ConfirmBox>
        </Container>
    );
};

export const mapStateToProps = (state: ReduxState) => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
});

const mapDispatchToProps = {
    setSearchCriteria,
    resetDestinations,
};

export const SearchPlaceModal = connect(mapStateToProps, mapDispatchToProps)(SearchPlaceModalComponent);
