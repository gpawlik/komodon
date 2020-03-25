import * as React from 'react';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';
import { ValueBox } from './components/value-box';
import { RoundTripBox } from './components/round-trip';

import { Container, VerticalBox, SwitchButton } from './styles';
import { Props, State } from './types';

export class SearchboxComponent extends React.Component<Props, State> {
    state = {
        hasAttemptedSubmit: false,
    };

    onAttemptSubmit = () => {
        this.setState({ hasAttemptedSubmit: true });
    };

    onSubmit = () => {
        const { validatedCriteria, navigate, searchFlights, criteria } = this.props;
        this.onAttemptSubmit();
        const isValid = Object.values(validatedCriteria).findIndex(item => item === false) < 0;

        if (isValid) {
            navigate('Results');
            searchFlights(criteria);
        }
    };

    handleRoundTripSwitch = (value: boolean) => {
        const { setSearchCriteria } = this.props;
        setSearchCriteria({ roundTrip: value });
    };

    handlePlaceSwitch = () => {
        const { setSearchCriteria, destinationPlace, departurePlace } = this.props;
        setSearchCriteria({ departurePlace: destinationPlace, destinationPlace: departurePlace });
    };

    render() {
        const {
            validatedCriteria,
            roundTrip,
            navigate,
            departurePlace,
            destinationPlace,
            departureText,
            returnText,
        } = this.props;
        const { hasAttemptedSubmit } = this.state;
        const isDeparturePlaceValid = !hasAttemptedSubmit || validatedCriteria.departurePlace;
        const isDestinationPlaceValid = !hasAttemptedSubmit || validatedCriteria.destinationPlace;
        const isDepartureDateValid = !hasAttemptedSubmit || validatedCriteria.departureDate;
        const isReturnDateValid = !hasAttemptedSubmit || validatedCriteria.returnDate;

        return (
            <Container>
                <RoundTripBox onChange={this.handleRoundTripSwitch} isRoundTrip={roundTrip} />
                <VerticalBox>
                    <ValueBox
                        label="From"
                        onPress={() => {
                            navigate('SearchPlaceModal', {
                                focused: 0,
                            });
                        }}
                        value={departurePlace.placeName}
                        valuePlaceholder={'Select airport'}
                        mainValue={departurePlace.placeCode}
                        placeholder="From"
                        isValid={isDeparturePlaceValid}
                        isLarge
                    />

                    <SwitchButton onPress={this.handlePlaceSwitch}>
                        <SVGIcon type={generalIcons.SWAP} colour="#eee" />
                    </SwitchButton>

                    <ValueBox
                        label="To"
                        onPress={() => {
                            navigate('SearchPlaceModal', {
                                focused: 1,
                            });
                        }}
                        value={destinationPlace.placeName}
                        valuePlaceholder={'Select airport'}
                        mainValue={destinationPlace.placeCode}
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
                            navigate('SearchDateModal', {
                                focused: 0,
                                roundTrip,
                            });
                        }}
                        value={departureText}
                        valuePlaceholder={'Select time'}
                        isValid={isDepartureDateValid}
                    />

                    {roundTrip ? (
                        <ValueBox
                            label="Return Time"
                            onPress={() => {
                                navigate('SearchDateModal', {
                                    focused: 1,
                                    roundTrip,
                                });
                            }}
                            value={returnText}
                            valuePlaceholder={'Select time'}
                            isValid={isReturnDateValid}
                            alignRight
                        />
                    ) : null}
                </VerticalBox>

                <Button message="Search" onPress={this.onSubmit} />
            </Container>
        );
    }
}
