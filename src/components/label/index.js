// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {
    message: $npm$ReactIntl$MessageDescriptor | string,
    isGhost?: boolean,
};

export const Label = ({ message, isGhost }: Props) => {
    const color = 'red';
    return (
        <Container isGhost={isGhost} color={color}>
            <Text message={message} color={color} />
        </Container>
    );
};
