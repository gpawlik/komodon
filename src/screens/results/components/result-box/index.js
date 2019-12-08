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

export const ResultBox = ({ price, routes = [], deepLink = '' }) => {
    return (
        <Container>
            <DetailsBox>
                {routes.map(
                    ({ airlines = [], departureTime, arrivalTime, departureIata, returnIata, duration }, index) => {
                        // TODO: Handle this on the backend
                        const departureDate = (deepLink.split('departure=')[1] || '').slice(0, 5).replace('-', '/');
                        const returnDate = (deepLink.split('return=')[1] || '').slice(0, 5).replace('-', '/');
                        return (
                            <RouteBox key={index} isLast={index % 2 === 1}>
                                <LogoBox>
                                    <LogoPlaceholder>
                                        <LogoText>{airlines[0]}</LogoText>
                                    </LogoPlaceholder>
                                    <DateText message={index === 0 ? departureDate : returnDate} />
                                </LogoBox>
                                <FlightBox>
                                    <FlightSegment alignRight>
                                        <TimeText>{departureTime}</TimeText>
                                        <PlaceText>{departureIata}</PlaceText>
                                    </FlightSegment>
                                    <DurationBox>
                                        <DurationText>{duration}</DurationText>
                                    </DurationBox>
                                    <FlightSegment>
                                        <TimeText>{arrivalTime}</TimeText>
                                        <PlaceText>{returnIata}</PlaceText>
                                    </FlightSegment>
                                </FlightBox>
                            </RouteBox>
                        );
                    },
                )}
            </DetailsBox>
            <PriceBox>
                <PriceText message={`€${price}`} />
            </PriceBox>
        </Container>
    );
};
