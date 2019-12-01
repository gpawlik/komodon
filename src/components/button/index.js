// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    isDisabled?: boolean,
    qaName?: string,
    onPress: () => void | Promise<*>,
|};

export const Button = ({ message, isDisabled, onPress, qaName }: Props) => {
    const testProps = qaName ? { testID: `button.${qaName}` } : {};

    return (
        <Container onPress={onPress} isDisabled={isDisabled} {...testProps}>
            <Text message={message} isDisabled={isDisabled} />
        </Container>
    );
};
