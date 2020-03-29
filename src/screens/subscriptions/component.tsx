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
        const { subscriptions = [], isLoading, deleteSubscription } = this.props;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    {subscriptions.map(({ id, searchCriteria }, index) => (
                        <ItemBox key={index}>
                            <SubscriptionItem
                                departureCode={searchCriteria?.departurePlace?.placeCode}
                                departureName={searchCriteria?.departurePlace?.placeName}
                                destinationCode={searchCriteria?.destinationPlace?.placeCode}
                                destinationName={searchCriteria?.destinationPlace?.placeName}
                                departureText="Departure text"
                                returnText="Return text"
                            />
                            <IconBox onPress={() => deleteSubscription(id)}>
                                <Icon type={generalIcons.TRASH} />
                            </IconBox>
                        </ItemBox>
                    ))}
                </Content>
            </Container>
        );
    }
}
