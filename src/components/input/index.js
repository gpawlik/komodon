// @flow
import * as React from 'react';

import { StyledInput, Container, Label, ErrorLabel } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

export class Input extends React.PureComponent<Props> {
    render() {
        const { value, onValueChange, ...rest } = this.props;
        return <StyledInput onChangeText={onValueChange} value={value} autoCorrect={false} {...rest} />;
    }
}

export class InputBox extends React.PureComponent<Props> {
    render() {
        const { label, error, hasError, ...rest } = this.props;
        return (
            <Container>
                <Label hasError={hasError}>{label}</Label>
                <Input hasError={hasError} {...rest} />
                {hasError ? <ErrorLabel>{error}</ErrorLabel> : null}
            </Container>
        );
    }
}
