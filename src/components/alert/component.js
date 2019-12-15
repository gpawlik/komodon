// @flow
import * as React from 'react';

import { Container, Text } from './styles';
import type { Props } from './types';

export const AlertComponent = React.memo(({ text, type }: Props) => {
    if (!text) {
        return null;
    }

    return (
        <Container type={type}>
            <Text>{text}</Text>
        </Container>
    );
});
