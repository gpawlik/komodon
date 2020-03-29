import * as React from 'react';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';
import { SubscriptionItem } from '~/components/subscription-item';
import { Props } from './types';

import { Container, IconBox, Header, Title, ButtonBox, CloseBox } from './styles';

const hitSlop = { top: 15, bottom: 15, left: 15, right: 15 };

export const SubscriptionContentComponent = ({
    departure,
    destination,
    departureText,
    returnText,
    subscriptionCriteria,
    createSubscription,
    onClose,
    onSubmit,
}: Props) => {
    const { placeCode: departureCode = '', placeName: departureName = '' } = departure || {};
    const { placeCode: destinationCode = '', placeName: destinationName = '' } = destination || {};
    const handleSubmit = () => {
        createSubscription(subscriptionCriteria);
        onSubmit();
    };

    // TODO: add place icon in between
    return (
        <Container>
            <IconBox>
                <SVGIcon type={generalIcons.BELL} size={50} />
            </IconBox>
            <Header>
                <Title message={`Create a price alert for:`} />
            </Header>

            <SubscriptionItem
                departureCode={departureCode}
                departureName={departureName}
                destinationCode={destinationCode}
                destinationName={destinationName}
                departureText={departureText}
                returnText={returnText}
            />

            <ButtonBox>
                <Button onPress={handleSubmit} message="Create alert" isStretched />
            </ButtonBox>
            <CloseBox onPress={onClose} hitSlop={hitSlop}>
                <SVGIcon type={generalIcons.CLOSE} size={16} />
            </CloseBox>
        </Container>
    );
};
