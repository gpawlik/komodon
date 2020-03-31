import * as React from 'react';

import { TextRegular2 } from '~/components/text';
import { Container } from './styles';

interface Props {
    message: string;
    route?: string;
    onPress: (arg0: string) => void;
}

export class MenuItem extends React.PureComponent<Props> {
    onPress = () => this.props.onPress(this.props.route);

    render() {
        const { message } = this.props;

        return (
            <Container onPress={this.onPress}>
                <TextRegular2 message={message} />
            </Container>
        );
    }
}
