// @flow
import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { StyledInput, Container, InputContainer, ButtonContainer, Label, ErrorLabel } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

export class Input extends React.PureComponent<Props> {
    render() {
        const { value, onValueChange, showReset, onReset, ...rest } = this.props;
        return (
            <InputContainer>
                <StyledInput onChangeText={onValueChange} value={value} autoCorrect={false} {...rest} />
                {showReset ? (
                    <ButtonContainer onPress={onReset}>
                        <SVGIcon type={generalIcons.CLOSE_CIRCLE} height={22} width={22} colour="#ccc" />
                    </ButtonContainer>
                ) : null}
            </InputContainer>
        );
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
