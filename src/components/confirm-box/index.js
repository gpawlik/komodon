// @flow
import * as React from 'react';
import { Button } from '~/components/button';

import { Container } from './styles';

type Props = $Exact<{
    text: string,
    onPress: () => {},
    isDisabled?: boolean,
}>;

export const ConfirmBox = ({ text, onPress, isDisabled }: Props) => {
    return (
        <Container>
            <Button message={text} onPress={onPress} isDisabled={isDisabled} />
        </Container>
    );
};
