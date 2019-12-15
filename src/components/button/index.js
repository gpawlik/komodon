// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Text } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    isDisabled?: boolean,
    onPress: () => void | Promise<*>,
|};

export const Button = React.memo(({ message, isDisabled, isStretched, onPress }: Props) => (
    <Container onPress={onPress} isDisabled={isDisabled} isStretched={isStretched}>
        <Text message={message} isDisabled={isDisabled} />
    </Container>
));
