import * as React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { SubscriptionItem } from '~/components/subscription-item';

import { Container, Content } from './styles';
import { Props, State } from './types';

export class SubscriptionDetailsComponent extends React.PureComponent<Props, State> {
    state = {
        type: 0,
    };

    componentDidMount() {
        this.props.requestSubscriptionHistory();
    }

    handleType = (type: number) => this.setState({ type });

    render() {
        const { isLoading, deleteSubscription, navigation } = this.props;
        const departurePlace = navigation?.state?.params?.departurePlace;
        const destinationPlace = navigation?.state?.params?.destinationPlace;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    <SubscriptionItem
                        departureCode={departurePlace?.placeCode}
                        departureName={departurePlace?.placeName}
                        destinationCode={destinationPlace?.placeCode}
                        destinationName={destinationPlace?.placeName}
                        departureText="Departure text"
                        returnText="Return text"
                    />
                    <LineChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 30} // from react-native
                        height={220}
                        yAxisLabel="€"
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(32, 191, 107, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: '4',
                                strokeWidth: '2',
                                stroke: '#16a085',
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 16,
                            marginHorizontal: 15,
                            borderRadius: 4,
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
