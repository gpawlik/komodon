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
    getValidatedCriteria,
} from '~/domains/search/selectors';
import { searchFlights, setSearchCriteria } from '~/domains/search/actions';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';
import { ValueBox } from './components/value-box';
import { RoundTripBox } from './components/round-trip';

import { Container, VerticalBox, SwitchButton } from './styles';

export const SearchboxComponent = props => {
    const [roundTrip, onRoundTripSelect] = React.useState(true);
    const [hasAttemptedSubmit, onAttemptSubmit] = React.useState(false);

    const onSubmit = () => {
        // const payload = {
        //     roundTrip,
        //     ...props.criteria,
        // };

        //props.searchFlights(payload);
        onAttemptSubmit(true);
        const isValid = Object.values(props.validatedCriteria).findIndex(item => item === false) < 0;
        console.log({ hm: Object.values(props.validatedCriteria) });
        if (isValid) {
            props.navigate('Results');
        }
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
            <RoundTripBox onChange={onRoundTripSelect} isRoundTrip={roundTrip} />
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
                    <SVGIcon type={generalIcons.SWAP} color="#eee" />
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
                            roundTrip,
                        });
                    }}
                    value={props.departureText}
                    valuePlaceholder={'Select time'}
                    isValid={isDepartureDateValid}
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

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
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
