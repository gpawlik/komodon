import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { SubscriptionItem } from '~/components/subscription-item';
import { getJointDescriptiveName } from '~/screens/search-date/utils';

import { Container, Content, ItemBox } from './styles';
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
                        const {
                            departurePlace,
                            destinationPlace,
                            departureDates,
                            departureDaysOfWeek,
                            returnDates,
                            returnDaysOfWeek,
                            daysRange,
                        } = searchCriteria || {};

                        const departureText = getJointDescriptiveName([
                            { type: 'TIME_CAL', value: departureDates },
                            { type: 'TIME_DAYS', value: departureDaysOfWeek },
                        ]);

                        const returnText = getJointDescriptiveName([
                            { type: 'TIME_CAL', value: returnDates },
                            { type: 'TIME_DAYS', value: returnDaysOfWeek },
                            { type: 'TIME_RANGE', value: daysRange },
                        ]);

                        return (
                            <ItemBox
                                key={index}
                                onPress={() => {
                                    navigation.navigate('SubscriptionModal', {
                                        searchCriteria,
                                        deleteSubscription,
                                        id,
                                    });
                                }}
                            >
                                <SubscriptionItem
                                    departureCode={departurePlace?.placeCode}
                                    departureName={departurePlace?.placeName}
                                    destinationCode={destinationPlace?.placeCode}
                                    destinationName={destinationPlace?.placeName}
                                    departureText={departureText}
                                    returnText={returnText}
                                />
                            </ItemBox>
                        );
                    })}
                </Content>
            </Container>
        );
    }
}
