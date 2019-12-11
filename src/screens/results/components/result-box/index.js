// @flow
import * as React from 'react';
import { Image, Linking } from 'react-native';

import {
    Container,
    DetailsBox,
    RouteBox,
    LogoBox,
    // LogoPlaceholder,
    // LogoText,
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
    const openLink = () => Linking.openURL(deepLink).catch(err => console.log('An error occurred', err));

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
                                    {/* <LogoPlaceholder>
                                        <LogoText>{airlines[0]}</LogoText>
                                    </LogoPlaceholder> */}
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={{
                                            uri: `https://content.r9cdn.net/rimg/provider-logos/airlines/v/${airlines[0]}.png`,
                                        }}
                                    />
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
            <PriceBox onPress={openLink}>
                <PriceText message={`€${price}`} />
            </PriceBox>
        </Container>
    );
};
