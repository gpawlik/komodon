import * as React from 'react';

import { Container, Text, Spinner } from './styles';

interface Props {
    message: string;
    isDisabled?: boolean;
    isStretched?: boolean;
    isSubmitting?: boolean;
    onPress: () => void | Promise<any>;
}

export const Button = React.memo(({ message, isDisabled, isStretched, onPress, isSubmitting }: Props) => (
    <Container onPress={!isSubmitting ? onPress : () => {}} isDisabled={isDisabled} isStretched={isStretched}>
        <Text message={message} isDisabled={isDisabled} />
        {isSubmitting ? <Spinner /> : null}
    </Container>
));
