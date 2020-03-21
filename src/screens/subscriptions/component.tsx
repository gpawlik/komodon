import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';

import { Container, Content, ItemBox, ItemText } from './styles';
import { Props, State } from './types';

export class SubscriptionsComponent extends React.PureComponent<Props, State> {
    state = {
        type: 0,
    };

    handleType = (type: number) => this.setState({ type });

    render() {
        const { subscriptions, isLoading } = this.props;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    {subscriptions.map(({ title }, index) => (
                        <ItemBox key={index}>
                            <ItemText>{title}</ItemText>
                        </ItemBox>
                    ))}
                </Content>
            </Container>
        );
    }
}
