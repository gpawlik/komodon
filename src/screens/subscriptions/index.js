// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getSubscriptions, getIsLoading } from '~/domains/subscriptions/selectors';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';

import { Container, Content, ItemBox, ItemText } from './styles';

export class SubscriptionsScreen extends React.PureComponent {
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

export const mapStateToProps = (state: any): StateProps => ({
    subscriptions: getSubscriptions(state),
    isLoading: getIsLoading(state),
});

export const Subscriptions = connect(mapStateToProps, null)(SubscriptionsScreen);
