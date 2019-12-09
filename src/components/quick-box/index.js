// @flow
import * as React from 'react';

import { Container, NameText, DescriptionText } from './styles';

export class QuickBox extends React.PureComponent {
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
