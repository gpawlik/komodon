// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Container, Button, ButtonText } from './styles';

interface Props {
    text: string;
    url: string;
}

export class RoundTripBox extends React.Component<Props> {
    render() {
        const { onChange, isRoundTrip } = this.props;

        return (
            <Container>
                <Button onPress={() => onChange(false)} isSelected={!isRoundTrip}>
                    <ButtonText isSelected={!isRoundTrip}>One-way</ButtonText>
                </Button>
                <Button onPress={() => onChange(true)} isSelected={isRoundTrip}>
                    <ButtonText isSelected={isRoundTrip}>Round trip</ButtonText>
                </Button>
            </Container>
        );
    }
}
