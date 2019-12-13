// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace } from '~/domains/search/selectors';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';

import { Container, IconBox, TextBox, Text } from './styles';

export const SubscriptionBoxComponent = ({
    departure: { placeCode: departureCode = '' } = {},
    destination: { placeCode: destinationCode = '' } = {},
}) => {
    return (
        <Container onPress={() => {}}>
            <IconBox>
                <SVGIcon type={generalIcons.BELL} size={20} />
            </IconBox>
            <TextBox>
                <Text message={`Create a price alert for ${departureCode} - ${destinationCode}`} />
            </TextBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departure: getDeparturePlace(state),
    destination: getDestinationPlace(state),
});

export const SubscriptionBox = connect(mapStateToProps, null)(SubscriptionBoxComponent);
