// @flow
import * as React from 'react';

import { ContentBox, Button, ButtonText } from './styles';
import { messages } from './intl';

type Props = {
    children: React.Node,
};

type State = {
    isOpen: boolean,
};

export class RevealBox extends React.Component<Props, State> {
    state = {
        isOpen: false,
    };

    handleToggleContent = () => this.setState(state => ({ isOpen: !state.isOpen }));

    render() {
        const { children } = this.props;
        const { isOpen } = this.state;
        const text = isOpen ? messages.showLess : messages.showMore;

        return (
            <React.Fragment>
                <ContentBox isOpen={isOpen}>{children}</ContentBox>

                <Button onPress={this.handleToggleContent}>
                    <ButtonText>{text}</ButtonText>
                </Button>
            </React.Fragment>
        );
    }
}
