import * as React from 'react';
import { Button } from '~/components/button';

import { Container } from './styles';

interface Props {
    text: string;
    onPress: () => void | Promise<any>;
    isDisabled?: boolean;
    isSubmitting?: boolean;
}

export const ConfirmBox = ({ text, onPress, isDisabled, isSubmitting }: Props) => (
    <Container>
        <Button message={text} onPress={onPress} isDisabled={isDisabled} isSubmitting={isSubmitting} />
    </Container>
);
