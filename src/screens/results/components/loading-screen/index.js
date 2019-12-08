// @flow
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export const LoadingScreen = () => {
    return (
        <Container>
            <ActivityIndicator size="large" />
        </Container>
    );
};
