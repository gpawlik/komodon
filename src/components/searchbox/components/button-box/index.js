// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Container, Button, ButtonText } from './styles';

type Props = {
    text: string,
    url: string,
};

export class ButtonBox extends React.Component<Props> {
    render() {
        const { onChange, options = [] } = this.props;

        return (
            <Container>
                {options.map(({ id, text }) => (
                    <Button onPress={() => onChange(id)}>
                        <ButtonText>{text}</ButtonText>
                    </Button>
                ))}
            </Container>
        );
    }
}
