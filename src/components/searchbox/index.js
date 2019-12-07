// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import {
    getState as getCriteria,
    getDeparturePlace,
    getDestinationPlace,
    getDepartureDates,
    getReturnDates,
    getDepartureText,
    getReturnText,
} from '~/domains/search/selectors';
import { searchFlights, setSearchCriteria } from '~/domains/search/actions';

import { Button } from '~/components/button';

import { ValueBox } from './components/value-box';
import { RoundTripBox } from './components/round-trip';

import { Container, VerticalBox, SwitchButton } from './styles';

export const SearchboxComponent = props => {
    const [roundTrip, onRoundTripSelect] = React.useState(true);
    const [focusedField, onFocus] = React.useState('');

    const onSubmit = () => {
        const payload = {
            roundTrip,
            filter: {},
            ...props.criteria,
        };
        console.log({ payload });
        //props.searchFlights(payload);
    };

    const handleFocus = value => {
        onFocus(value === focusedField ? '' : value);
    };

    const handlePlaceSwitch = () => {
        props.setSearchCriteria({ departurePlace: props.destinationPlace, destinationPlace: props.departurePlace });
    };

    return (
        <Container>
            <RoundTripBox onChange={onRoundTripSelect} isRoundTrip={roundTrip} />
            <VerticalBox>
                <ValueBox
                    label="From"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 0,
                            otherParam: 'First Details',
                        });
                    }}
                    showContent={focusedField === 'DEP_PLACE'}
                    value={props.departurePlace.placeName}
                    mainValue={props.departurePlace.placeCode}
                    onConfirm={() => handleFocus('')}
                    isLarge
                />

                <SwitchButton onPress={handlePlaceSwitch} />

                <ValueBox
                    label="To"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 1,
                            otherParam: 'First Details',
                        });
                    }}
                    showContent={focusedField === 'DES_PLACE'}
                    value={props.destinationPlace.placeName}
                    mainValue={props.destinationPlace.placeCode}
                    onConfirm={() => handleFocus('')}
                    alignRight
                    isLarge
                />
            </VerticalBox>

            <VerticalBox>
                <ValueBox
                    label="Departure Time"
                    onPress={() => {
                        props.navigate('SearchDateModal', {
                            focused: 0,
                            roundTrip,
                        });
                    }}
                    showContent={focusedField === 'DEP_TIME'}
                    onConfirm={() => handleFocus('')}
                    value={props.departureText || 'Select time'}
                />

                {roundTrip ? (
                    <ValueBox
                        label="Return Time"
                        onPress={() => {
                            props.navigate('SearchDateModal', {
                                focused: 1,
                            });
                        }}
                        showContent={focusedField === 'RET_TIME'}
                        value={props.returnText || 'Select time'}
                    />
                ) : null}
            </VerticalBox>

            <Button message="Search" onPress={onSubmit} />
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
    criteria: getCriteria(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
});

const mapDispatchToProps = {
    searchFlights,
    setSearchCriteria,
};

export const Searchbox = connect(mapStateToProps, mapDispatchToProps)(SearchboxComponent);
