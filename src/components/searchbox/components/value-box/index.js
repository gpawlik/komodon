// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Container, ValueButton, Value, Label } from './styles';

type Props = {
    text: string,
    url: string,
};

export class ValueBox extends React.Component<Props> {
    render() {
        const { children, label, value, onPress, showContent } = this.props;

        return (
            <Container>
                <Label>{label}</Label>
                <ValueButton onPress={onPress}>
                    <Value>{value}</Value>
                </ValueButton>

                {showContent ? children : null}
            </Container>
        );
    }
}
