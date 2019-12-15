// @flow
import * as React from 'react';

import { Container, Value, Label, Highlight } from './styles';

type Props = {};

export class ValueBox extends React.Component<Props> {
    render() {
        const {
            label,
            value,
            valuePlaceholder,
            mainValue,
            placeholder,
            isValid,
            onPress,
            alignRight,
            isLarge,
        } = this.props;
        const hasError = !isValid;

        return (
            <React.Fragment>
                <Container onPress={onPress} alignRight={alignRight} isLarge={isLarge}>
                    {!isLarge ? <Label hasError={hasError}>{label}</Label> : null}

                    {mainValue || placeholder ? (
                        <Highlight isLight={!mainValue} hasError={hasError}>
                            {mainValue || placeholder}
                        </Highlight>
                    ) : null}

                    {value ? (
                        <Value hasError={hasError}>{value}</Value>
                    ) : (
                        <Value hasError={hasError} isLight>
                            {valuePlaceholder}
                        </Value>
                    )}
                </Container>
            </React.Fragment>
        );
    }
}
