// @flow
import * as React from 'react';
import { Button } from '~/components/button';

import { Container } from './styles';

type Props = $Exact<{
    text: string,
    onPress: () => {},
}>;

export const ConfirmBox = ({ text, onPress }: Props) => {
    return (
        <Container>
            <Button message={text} onPress={onPress} />
        </Container>
    );
};
