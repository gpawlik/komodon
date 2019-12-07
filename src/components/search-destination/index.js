// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureDates, getReturnDates } from '~/domains/search/selectors';
import { searchFlights, setSearchCriteria } from '~/domains/search/actions';

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

    return (
        <Container>
            <Header backIcon={generalIcons.CLOSE} backAction={closeModal} />
            <SectionBox
                label1="Departure city"
                text1="Select city"
                label2="Destination city"
                text2="Select city"
                selectedIndex={focusedField}
                onChange={onFocus}
            />
            {focusedField === 0 && <DestinationBox value={departurePlace} onValueChange={onDepartureChange} />}
            {focusedField === 1 && <DestinationBox value={destinationPlace} onValueChange={onDestinationChange} />}

            <ConfirmBox>
                <Button message="Select this" onPress={onSubmit} />
            </ConfirmBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
});

const mapDispatchToProps = {
    searchFlights,
    setSearchCriteria,
};

export const SearchPlaceModal = connect(mapStateToProps, mapDispatchToProps)(SearchPlaceModalComponent);
