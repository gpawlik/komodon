import * as React from 'react';
import { connect } from 'react-redux';

import { getPriceOfCheapest, getPriceOfFastest } from '~/domains/results/selectors';

import { Container, ButtonBox, TitleText, PriceText } from './styles';

interface StateProps {
    priceOfCheapest: number;
    priceOfFastest: number;
}

interface OwnProps {
    value: number;
    onPress: (arg0: number) => void;
}

type Props = StateProps & OwnProps;

export const SortBoxComponent = ({ value, onPress, priceOfCheapest, priceOfFastest }: Props) => {
    const isFirstSelected = value === 0;
    const isSecondSelected = value === 1;
    return (
        <Container>
            <ButtonBox onPress={() => onPress(0)} isSelected={isFirstSelected}>
                <TitleText isSelected={isFirstSelected}>Cheapest</TitleText>
                <PriceText isSelected={isFirstSelected}>{`€${priceOfCheapest}`}</PriceText>
            </ButtonBox>
            <ButtonBox onPress={() => onPress(1)} isSelected={isSecondSelected}>
                <TitleText isSelected={isSecondSelected}>Quickest</TitleText>
                <PriceText isSelected={isSecondSelected}>{`€${priceOfFastest}`}</PriceText>
            </ButtonBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    priceOfCheapest: getPriceOfCheapest(state),
    priceOfFastest: getPriceOfFastest(state),
});

export const SortBox = connect(mapStateToProps, null)(SortBoxComponent);
