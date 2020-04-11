import * as React from 'react';

import { Container, Text, Spinner } from './styles';

interface Props {
    message: string;
    isGhost?: boolean;
    isDisabled?: boolean;
    isStretched?: boolean;
    isSubmitting?: boolean;
    onPress: () => void | Promise<any>;
}

export const Button = React.memo(({ message, isGhost, isDisabled, isStretched, onPress, isSubmitting }: Props) => (
    <Container
        onPress={!isSubmitting && !isDisabled ? onPress : () => {}}
        isGhost={isGhost}
        isDisabled={isDisabled}
        isStretched={isStretched}
    >
        <Text message={message} isGhost={isGhost} isDisabled={isDisabled} />
        {isSubmitting ? <Spinner /> : null}
    </Container>
));
