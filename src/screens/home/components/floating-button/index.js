// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {
    message: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => Promise<*>,
};

export const FloatingButton = ({ message, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Text message={message} />
        </Container>
    );
};
