import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { SubscriptionItem } from '~/components/subscription-item';

import { Container, Content, ItemBox, IconBox, Icon } from './styles';
import { Props, State } from './types';

export class SubscriptionsComponent extends React.PureComponent<Props, State> {
    state = {
        type: 0,
    };

    componentDidMount() {
        this.props.requestSubscriptions();
    }

    handleType = (type: number) => this.setState({ type });

    render() {
        const { subscriptions = [], isLoading, deleteSubscription, navigation } = this.props;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    {subscriptions.map(({ id, searchCriteria }, index) => {
                        const { departurePlace, destinationPlace } = searchCriteria || {};
                        return (
                            <ItemBox
                                key={index}
                                onPress={() => {
                                    navigation.navigate('SubscriptionModal', {
                                        departurePlace,
                                        destinationPlace,
                                    });
                                }}
                            >
                                <SubscriptionItem
                                    departureCode={departurePlace?.placeCode}
                                    departureName={departurePlace?.placeName}
                                    destinationCode={destinationPlace?.placeCode}
                                    destinationName={destinationPlace?.placeName}
                                    departureText="Departure text"
                                    returnText="Return text"
                                />
                                <IconBox onPress={() => deleteSubscription(id)}>
                                    <Icon type={generalIcons.TRASH} />
                                </IconBox>
                            </ItemBox>
                        );
                    })}
                </Content>
            </Container>
        );
    }
}
