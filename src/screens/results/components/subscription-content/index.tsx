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
    CloseBox,
} from './styles';

interface Place {
    placeCode: string;
    placeName: string;
}

interface StateProps {
    departure: Place;
    destination: Place;
    departureText: string;
    returnText: string;
}

interface OwnProps {
    onPress: () => void;
    onClose: () => void;
    onSubmit: () => void;
}

type Props = StateProps & OwnProps;

const hitSlop = { top: 15, bottom: 15, left: 15, right: 15 };

export const SubscriptionContentComponent = ({
    departure,
    destination,
    departureText,
    returnText,
    onClose,
    onSubmit,
}: Props) => {
    const { placeCode: departureCode = '', placeName: departureName = '' } = departure || {};
    const { placeCode: destinationCode = '', placeName: destinationName = '' } = destination || {};

    // TODO: add place icon in between
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
                <Button onPress={onSubmit} message="Create alert" isStretched />
            </ButtonBox>
            <CloseBox onPress={onClose} hitSlop={hitSlop}>
                <SVGIcon type={generalIcons.CLOSE} size={16} />
            </CloseBox>
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
