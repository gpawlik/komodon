// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace } from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';
import { resetDestinations } from '~/domains/destinations/actions';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';

import { SectionBox } from '~/components/section-box';
import { Button } from '~/components/button';
import { DestinationBox } from '~/components/destination-box';

import { Container, ConfirmBox } from './styles';

export const SearchPlaceModalComponent = props => {
    const [departurePlace, onDepartureChange] = React.useState(props.departurePlace);
    const [destinationPlace, onDestinationChange] = React.useState(props.destinationPlace);

    const [focusedField, onFocus] = React.useState(props.navigation.getParam('focused'));

    const onSubmit = () => {
        props.setSearchCriteria({ departurePlace, destinationPlace });
        closeModal();
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
            {focusedField === 0 && <DestinationBox value={departurePlace} onValueChange={handleDepartureChange} />}
            {focusedField === 1 && <DestinationBox value={destinationPlace} onValueChange={handleDestinationChange} />}

            <ConfirmBox>
                <Button message="Select this" onPress={onSubmit} />
            </ConfirmBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
});

const mapDispatchToProps = {
    setSearchCriteria,
    resetDestinations,
};

export const SearchPlaceModal = connect(mapStateToProps, mapDispatchToProps)(SearchPlaceModalComponent);
