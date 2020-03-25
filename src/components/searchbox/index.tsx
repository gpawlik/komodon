import * as React from 'react';
import { connect } from 'react-redux';

import {
    getState as getCriteria,
    getDeparturePlace,
    getDestinationPlace,
    getDepartureDates,
    getReturnDates,
    getRoundTrip,
    getDepartureText,
    getReturnText,
    getValidatedCriteria,
} from '~/domains/search/selectors';
import { searchFlights, setSearchCriteria } from '~/domains/search/actions';
import { ReduxState } from '~/types';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';
import { ValueBox } from './components/value-box';
import { RoundTripBox } from './components/round-trip';

import { Container, VerticalBox, SwitchButton } from './styles';

export const SearchboxComponent = props => {
    const [hasAttemptedSubmit, onAttemptSubmit] = React.useState(false);

    const onSubmit = () => {
        onAttemptSubmit(true);
        const isValid = Object.values(props.validatedCriteria).findIndex(item => item === false) < 0;

        if (isValid) {
            props.navigate('Results');
            props.searchFlights(props.criteria);
        }
    };

    const handleRoundTripSwitch = (value: boolean) => {
        props.setSearchCriteria({ roundTrip: value });
    };

    const handlePlaceSwitch = () => {
        props.setSearchCriteria({ departurePlace: props.destinationPlace, destinationPlace: props.departurePlace });
    };

    const isDeparturePlaceValid = !hasAttemptedSubmit || props.validatedCriteria.departurePlace;
    const isDestinationPlaceValid = !hasAttemptedSubmit || props.validatedCriteria.destinationPlace;
    const isDepartureDateValid = !hasAttemptedSubmit || props.validatedCriteria.departureDate;
    const isReturnDateValid = !hasAttemptedSubmit || props.validatedCriteria.returnDate;

    return (
        <Container>
            <RoundTripBox onChange={handleRoundTripSwitch} isRoundTrip={props.roundTrip} />
            <VerticalBox>
                <ValueBox
                    label="From"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 0,
                        });
                    }}
                    value={props.departurePlace.placeName}
                    valuePlaceholder={'Select airport'}
                    mainValue={props.departurePlace.placeCode}
                    placeholder="From"
                    isValid={isDeparturePlaceValid}
                    isLarge
                />

                <SwitchButton onPress={handlePlaceSwitch}>
                    <SVGIcon type={generalIcons.SWAP} colour="#eee" />
                </SwitchButton>

                <ValueBox
                    label="To"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 1,
                        });
                    }}
                    value={props.destinationPlace.placeName}
                    valuePlaceholder={'Select airport'}
                    mainValue={props.destinationPlace.placeCode}
                    placeholder="To"
                    isValid={isDestinationPlaceValid}
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
                            roundTrip: props.roundTrip,
                        });
                    }}
                    value={props.departureText}
                    valuePlaceholder={'Select time'}
                    isValid={isDepartureDateValid}
                />

                {props.roundTrip ? (
                    <ValueBox
                        label="Return Time"
                        onPress={() => {
                            props.navigate('SearchDateModal', {
                                focused: 1,
                                roundTrip: props.roundTrip,
                            });
                        }}
                        value={props.returnText}
                        valuePlaceholder={'Select time'}
                        isValid={isReturnDateValid}
                        alignRight
                    />
                ) : null}
            </VerticalBox>

            <Button message="Search" onPress={onSubmit} />
        </Container>
    );
};

export const mapStateToProps = (state: ReduxState) => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
    roundTrip: getRoundTrip(state),
    criteria: getCriteria(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
    validatedCriteria: getValidatedCriteria(state),
});

const mapDispatchToProps = {
    searchFlights,
    setSearchCriteria,
};

export const Searchbox = connect(mapStateToProps, mapDispatchToProps)(SearchboxComponent);
