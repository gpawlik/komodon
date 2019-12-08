// @flow
import * as React from 'react';

import {
    Container,
    DetailsBox,
    RouteBox,
    LogoBox,
    LogoPlaceholder,
    LogoText,
    FlightBox,
    FlightSegment,
    TimeText,
    PlaceText,
    DurationBox,
    DurationText,
    DateText,
    PriceBox,
    PriceText,
} from './styles';

export const ResultBox = ({ text, onPress, price, currency }) => {
    return (
        <Container>
            <DetailsBox>
                <RouteBox>
                    <LogoBox>
                        <LogoPlaceholder>
                            <LogoText>VY</LogoText>
                        </LogoPlaceholder>
                        <DateText>01/12</DateText>
                    </LogoBox>
                    <FlightBox>
                        <FlightSegment alignRight>
                            <TimeText>14:40</TimeText>
                            <PlaceText>FAO</PlaceText>
                        </FlightSegment>
                        <DurationBox>
                            <DurationText>8h 15m</DurationText>
                        </DurationBox>
                        <FlightSegment>
                            <TimeText>22:25</TimeText>
                            <PlaceText>BCN</PlaceText>
                        </FlightSegment>
                    </FlightBox>
                </RouteBox>
                <RouteBox isLast>
                    <LogoBox>
                        <LogoPlaceholder>
                            <LogoText>VY</LogoText>
                        </LogoPlaceholder>
                        <DateText>09/12</DateText>
                    </LogoBox>
                    <FlightBox>
                        <FlightSegment alignRight>
                            <TimeText>11:05</TimeText>
                            <PlaceText>BCN</PlaceText>
                        </FlightSegment>
                        <DurationBox>
                            <DurationText>11h</DurationText>
                        </DurationBox>
                        <FlightSegment>
                            <TimeText>22:05</TimeText>
                            <PlaceText>FAO</PlaceText>
                        </FlightSegment>
                    </FlightBox>
                </RouteBox>
            </DetailsBox>
            <PriceBox>
                <PriceText>€102</PriceText>
            </PriceBox>
        </Container>
    );
};
