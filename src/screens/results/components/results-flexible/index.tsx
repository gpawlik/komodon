import * as React from 'react';
import { connect } from 'react-redux';

import { searchFlights, setSearchCriteria } from '~/domains/search/actions';

import { getState as getCriteria } from '~/domains/search/selectors';
import { getResultsFlexible } from '~/domains/results/selectors';
import { DestinationResult } from '~/domains/results/types';
import { ReduxState } from '~/types';

import { Container, TextBox, CityName, CountryName, ButtonBox, Button, ButtonText } from './styles';

interface Props {
    results: Array<DestinationResult>;
    setSearchCriteria: (arg0: any) => void;
    searchFlights: (arg0: any) => void;
    criteria: any;
}

export const ResultsFlexibleComponent = ({ results, criteria, searchFlights, setSearchCriteria }: Props) => {
    const onPress = item => {
        setSearchCriteria({ destinationPlace: item?.destination });
        searchFlights({ ...criteria, destinationPlace: item?.destination });
    };

    return results.map(item => {
        console.log({ item });
        return (
            <Container>
                <TextBox>
                    <CityName>{item.destination?.placeName}</CityName>
                    <CountryName>{item.destination?.countryName}</CountryName>
                </TextBox>
                <ButtonBox>
                    <Button onPress={() => onPress(item)}>
                        <ButtonText>{`€${item.price}`}</ButtonText>
                    </Button>
                </ButtonBox>
            </Container>
        );
    });
};

export const mapStateToProps = (state: ReduxState) => ({
    results: getResultsFlexible(state),
    criteria: getCriteria(state),
});

const mapDispatchToProps = {
    searchFlights,
    setSearchCriteria,
};

export const ResultsFlexible = connect(mapStateToProps, mapDispatchToProps)(ResultsFlexibleComponent);
