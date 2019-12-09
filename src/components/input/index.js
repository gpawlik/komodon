// @flow
import * as React from 'react';

import { StyledInput, Container, Label } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

export class Input extends React.PureComponent<Props> {
    render() {
        const { value, onValueChange } = this.props;
        return <StyledInput onChangeText={onValueChange} value={value} />;
    }
}

export class InputBox extends React.PureComponent<Props> {
    render() {
        const { label, ...rest } = this.props;
        return (
            <Container>
                <Label>{label}</Label>
                <Input {...rest} />
            </Container>
        );
    }
}
