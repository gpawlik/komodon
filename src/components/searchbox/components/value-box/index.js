// @flow
import * as React from 'react';

import { Container, Value, Label, Highlight } from './styles';

type Props = {};

export class ValueBox extends React.Component<Props> {
    render() {
        const { label, value, mainValue, placeholder, onPress, alignRight, isLarge } = this.props;

        return (
            <React.Fragment>
                <Container onPress={onPress} alignRight={alignRight} isLarge={isLarge}>
                    {!isLarge ? <Label>{label}</Label> : null}

                    {mainValue || placeholder ? (
                        <Highlight isLight={!mainValue}>{mainValue || placeholder}</Highlight>
                    ) : null}

                    <Value>{value}</Value>
                </Container>
            </React.Fragment>
        );
    }
}
