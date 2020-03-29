import * as React from 'react';

import { Content, SegmentBox, Segment, CodeText, CityText, MetaBox, MetaTitle, MetaText } from './styles';

interface Props {
    departureCode: string;
    departureName: string;
    destinationCode: string;
    destinationName: string;
    departureText: string;
    returnText: string;
}

export const SubscriptionItem = ({
    departureCode,
    departureName,
    destinationCode,
    destinationName,
    departureText,
    returnText,
}: Props) => {
    return (
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
    );
};
