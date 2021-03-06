import * as React from 'react';
import { connect } from 'react-redux';

import { searchFlights, setSearchCriteria } from '~/domains/search/actions';

import { getState as getCriteria } from '~/domains/search/selectors';
import { getItineraryResults } from '~/domains/results/selectors';
import { ItineraryResult } from '~/domains/results/types';
import { ReduxState } from '~/types';

import { Container, TextBox, CityName, CountryName, ButtonBox, Button, ButtonText } from './styles';

interface Props {
    results: Array<ItineraryResult>;
    setSearchCriteria: (arg0: any) => void;
    searchFlights: (arg0: any) => void;
    criteria: any;
}

export const ResultsFlexibleComponent = ({ results, criteria, searchFlights, setSearchCriteria }: Props) => {
    const onPress = item => {
        setSearchCriteria({ destinationPlace: item?.destination });
        searchFlights({ ...criteria, destinationPlace: item?.destination });
    };

    return results.map(item => (
        <Container key={item?.destination?.placeId}>
            <TextBox>
                <CityName>{item.destination?.placeName}</CityName>
                <CountryName>{item.destination?.countryName}</CountryName>
            </TextBox>
            <ButtonBox>
                <Button onPress={() => onPress(item)}>
                    <ButtonText>{`€${item.flightResults?.[0]?.price}`}</ButtonText>
                </Button>
            </ButtonBox>
        </Container>
    ));
};

export const mapStateToProps = (state: ReduxState) => ({
    results: getItineraryResults(state),
    criteria: getCriteria(state),
});

const mapDispatchToProps = {
    searchFlights,
    setSearchCriteria,
};

export const ResultsFlexible = connect(mapStateToProps, mapDispatchToProps)(ResultsFlexibleComponent);
