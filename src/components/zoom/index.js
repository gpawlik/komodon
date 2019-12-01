// @flow
import * as React from 'react';

import { Container, Button, Text } from './styles';

type Props = {
    onZoomIn: () => void,
    onZoomOut: () => void,
};

export const Zoom = ({ onZoomIn, onZoomOut }: Props) => (
    <Container>
        <Button onPress={onZoomIn}>
            <Text message="+" />
        </Button>
        <Button onPress={onZoomOut}>
            <Text message="-" isLast />
        </Button>
    </Container>
);
