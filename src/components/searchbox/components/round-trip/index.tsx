import * as React from 'react';

import { Container, Button, ButtonText } from './styles';

interface Props {
    onChange: (arg0: boolean) => void;
    isRoundTrip: boolean;
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
