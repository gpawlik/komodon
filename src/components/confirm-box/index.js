// @flow
import * as React from 'react';
import { Button } from '~/components/button';

import { Container } from './styles';

export const ConfirmBox = ({ text, onPress }) => {
    return (
        <Container>
            <Button message={text} onPress={onPress} />
        </Container>
    );
};
