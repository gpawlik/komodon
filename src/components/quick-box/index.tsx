import * as React from 'react';

import { Container, NameText, DescriptionText } from './styles';

interface Props {
    onPress: () => void;
    text: string;
    description: string;
}

export class QuickBox extends React.PureComponent<Props> {
    render() {
        const { onPress, text, description } = this.props;

        return (
            <Container onPress={onPress}>
                <NameText>{text}</NameText>
                <DescriptionText>{description}</DescriptionText>
            </Container>
        );
    }
}
