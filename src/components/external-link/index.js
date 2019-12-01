// @flow
import * as React from 'react';
import { Linking } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Container, Button, Text } from './styles';

type Props = {
    text: string,
    url: string,
};

export class ExternalLink extends React.Component<Props> {
    openUrl = () => Linking.openURL(this.props.url);

    render() {
        const { text } = this.props;
        return (
            <Container isCentered>
                <Button onPress={this.openUrl}>
                    <Text message={text} />
                    <SVGIcon type={generalIcons.EXTERNAL_LINK} size={14} />
                </Button>
            </Container>
        );
    }
}
