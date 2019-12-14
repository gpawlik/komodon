// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureText, getReturnText } from '~/domains/search/selectors';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';

import {
    Container,
    IconBox,
    Header,
    Title,
    ButtonBox,
    Content,
    SegmentBox,
    Segment,
    CodeText,
    CityText,
    MetaBox,
    MetaTitle,
    MetaText,
} from './styles';

export const SubscriptionContentComponent = ({
    departure: { placeCode: departureCode = '', placeName: departureName = '' } = {},
    destination: { placeCode: destinationCode = '', placeName: destinationName = '' } = {},
    departureText,
    returnText,
    onPress,
}) => {
    return (
        <Container>
            <IconBox>
                <SVGIcon type={generalIcons.BELL} size={50} />
            </IconBox>
            <Header>
                <Title message={`Create a price alert for:`} />
            </Header>
            <Content>
                <SegmentBox>
                    <Segment isLeft>
                        <CodeText>{departureCode}</CodeText>
                        <CityText>{departureName}</CityText>
                    </Segment>
                    <Segment>
                        <CodeText>{destinationCode}</CodeText>
                        <CityText>{destinationName}</CityText>
                    </Segment>
                </SegmentBox>
                <MetaBox>
                    <Segment isLeft>
                        <MetaTitle isLeft>Departure</MetaTitle>
                        <MetaText isLeft>{departureText}</MetaText>
                    </Segment>

                    <Segment>
                        <MetaTitle>Return</MetaTitle>
                        <MetaText>{returnText}</MetaText>
                    </Segment>
                </MetaBox>
            </Content>
            <ButtonBox>
                <Button message="Create alert" isStretched />
            </ButtonBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departure: getDeparturePlace(state),
    destination: getDestinationPlace(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
});

export const SubscriptionContent = connect(mapStateToProps, null)(SubscriptionContentComponent);
