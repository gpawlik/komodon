import * as React from 'react';

import { Container, Text } from './styles';

interface Props {
    message: string;
    isDisabled?: boolean;
    isStretched?: boolean;
    onPress: () => void | Promise<any>;
}

export const Button = React.memo(({ message, isDisabled, isStretched, onPress }: Props) => (
    <Container onPress={onPress} isDisabled={isDisabled} isStretched={isStretched}>
        <Text message={message} isDisabled={isDisabled} />
    </Container>
));
