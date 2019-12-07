// @flow
import * as React from 'react';

import { Container, Value, Label, Highlight } from './styles';

type Props = {};

export class ValueBox extends React.Component<Props> {
    state = {
        //top: 0,
    };

    // onLayout = (e: Event) => {
    //     this._container.measure((fx, fy, width, height, px, py) => {
    //         this.setState({ top: fy + height + 5 });
    //     });
    // };

    render() {
        const { label, value, mainValue, onPress, alignRight, isLarge } = this.props;

        return (
            <React.Fragment>
                <Container onPress={onPress} alignRight={alignRight} isLarge={isLarge}>
                    <Label>{label}</Label>
                    {mainValue ? <Highlight>{mainValue}</Highlight> : null}
                    <Value>{value}</Value>
                </Container>
            </React.Fragment>
        );
    }
}
