// @flow
import * as React from 'react';

import { Container, Title, Description } from './styles';

export const NoResults = () => {
    return (
        <Container>
            <Title>No results...</Title>
            <Description>Try another search criteria</Description>
        </Container>
    );
};
