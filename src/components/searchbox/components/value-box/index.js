// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { Button } from '~/components/button';
import { SVGIcon } from '~/icons';

import { Container, ValueButton, Value, Label } from './styles';

type Props = {};

export class ValueBox extends React.Component<Props> {
    state = {
        top: 0,
    };

    onLayout = (e: Event) => {
        this._container.measure((fx, fy, width, height, px, py) => {
            this.setState({ top: fy + height + 5 });
        });
    };

    render() {
        const { children, label, value, onPress } = this.props;

        return (
            <React.Fragment>
                <Container
                    onPress={onPress}
                    onLayout={this.onLayout}
                    ref={e => {
                        this._container = e;
                    }}
                >
                    <Label>{label}</Label>
                    <Value>{value}</Value>
                </Container>
            </React.Fragment>
        );
    }
}
