import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace } from '~/domains/search/selectors';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { ReduxState } from '~/types';

import { Container, IconBox, TextBox, Text } from './styles';

interface StateProps {
    departure: {
        placeCode: string;
    };
    destination: {
        placeCode: string;
    };
}

interface OwnProps {
    onPress: () => void;
}

type Props = StateProps & OwnProps;

export const SubscriptionBoxComponent = ({ departure, destination, onPress }: Props) => {
    const { placeCode: departureCode = '' } = departure || {};
    const { placeCode: destinationCode = '' } = destination || {};
    return (
        <Container onPress={onPress}>
            <IconBox>
                <SVGIcon type={generalIcons.BELL} size={20} />
            </IconBox>
            <TextBox>
                <Text message={`Create a price alert for ${departureCode} - ${destinationCode}`} />
            </TextBox>
        </Container>
    );
};

export const mapStateToProps = (state: ReduxState): StateProps => ({
    departure: getDeparturePlace(state),
    destination: getDestinationPlace(state),
});

export const SubscriptionBox = connect(mapStateToProps, null)(SubscriptionBoxComponent);
