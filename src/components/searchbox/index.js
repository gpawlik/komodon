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

    const onSubmit = () => {
        const payload = {
            roundTrip,
            ...props.criteria,
        };

        props.searchFlights(payload);
    };

    const handlePlaceSwitch = () => {
        props.setSearchCriteria({ departurePlace: props.destinationPlace, destinationPlace: props.departurePlace });
    };

    return (
        <Container>
            <RoundTripBox
                onChange={() => {
                    props.navigate('FiltersModal', {
                        focused: 0,
                    });
                }}
                isRoundTrip={roundTrip}
            />
            <VerticalBox>
                <ValueBox
                    label="From"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 0,
                        });
                    }}
                    value={props.departurePlace.placeName}
                    mainValue={props.departurePlace.placeCode}
                    isLarge
                />

                <SwitchButton onPress={handlePlaceSwitch} />

                <ValueBox
                    label="To"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 1,
                        });
                    }}
                    value={props.destinationPlace.placeName}
                    mainValue={props.destinationPlace.placeCode}
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
                    value={props.departureText || 'Select time'}
                />

                {roundTrip ? (
                    <ValueBox
                        label="Return Time"
                        onPress={() => {
                            props.navigate('SearchDateModal', {
                                focused: 1,
                                roundTrip,
                            });
                        }}
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
