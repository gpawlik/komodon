import * as React from 'react';

import { TextRegular2 } from '~/components/text';
import { Container } from './styles';

interface Props {
    message: string;
    route: string;
    qaName?: string;
    onPress: (arg0: string) => void;
}

export class MenuItem extends React.PureComponent<Props> {
    onPress = () => this.props.onPress(this.props.route);

    render() {
        const { message, qaName } = this.props;
        const testProps = qaName ? { testID: `menu-button.${qaName}` } : {};

        return (
            <Container onPress={this.onPress} {...testProps}>
                <TextRegular2 message={message} />
            </Container>
        );
    }
}
