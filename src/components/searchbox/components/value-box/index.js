// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Container, ValueButton, Value, Label, Flyout } from './styles';

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
        const { children, label, value, onPress, showContent } = this.props;

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

                {showContent ? <Flyout top={this.state.top}>{children}</Flyout> : null}
            </React.Fragment>
        );
    }
}
