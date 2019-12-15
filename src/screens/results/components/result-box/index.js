// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Image, Linking } from 'react-native';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { airlines as airlineCodes } from '~/constants/airlines';

import {
    Container,
    TopBox,
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
    InfoBox,
    AirlineText,
    TagText,
} from './styles';

type Props = {
    price: number,
    routes: Array<*>,
    deepLink: string,
};

export const ResultBox = ({ price, routes = [], deepLink = '', priceLevel }: Props) => {
    const openLink = () => Linking.openURL(deepLink).catch(err => console.log('An error occurred', err));
    const airlineList = routes.map(({ airlines = [] }) =>
        airlines.map(iata => (airlineCodes[iata] || iata).slice(0, 15)),
    );
    const uniqueAirlines = R.compose(R.uniq, R.flatten)(airlineList);

    return (
        <Container>
            <TopBox>
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
            </TopBox>
            <InfoBox>
                <AirlineText>{uniqueAirlines.join(' + ')}</AirlineText>
                {priceLevel === 'CHEAP' ? <SVGIcon type={generalIcons.BANKNOTE} colour="#ccc" /> : null}
            </InfoBox>
        </Container>
    );
};
