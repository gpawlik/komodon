import * as React from 'react';
import * as R from 'ramda';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { getDescriptiveName } from '~/screens/search-date/utils';

import {
    Container,
    Content,
    IconBox,
    Icon,
    SectionBox,
    MainTitle,
    DataItem,
    SectionTitle,
    Label,
    Text,
} from './styles';
import { Props, State } from './types';

export class SubscriptionDetailsComponent extends React.PureComponent<Props, State> {
    state = {
        type: 0,
    };

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation?.state?.params?.id;
        this.props.requestSubscriptionHistory({ id });
    }

    handleType = (type: number) => this.setState({ type });

    render() {
        const { isLoading, navigation } = this.props;
        const searchCriteria = navigation?.state?.params?.searchCriteria;
        const searchFilter = searchCriteria?.searchFilter;

        const departurePlace = searchCriteria?.departurePlace;
        const destinationPlace = searchCriteria?.destinationPlace;
        const departureDates = searchCriteria?.departureDates;
        const departureDaysOfWeek = searchCriteria?.departureDaysOfWeek;
        const returnDates = searchCriteria?.returnDates;
        const returnDaysOfWeek = searchCriteria?.returnDaysOfWeek;
        const daysRange = searchCriteria?.daysRange;

        const departureTimeFilter = searchFilter?.departureTime;
        const arrivalTimeFilter = searchFilter?.arrivalTime;
        const returnDepartureTimeFilter = searchFilter?.returnDepartureTime;
        const returnArrivalTimeFilter = searchFilter?.returnArrivalTime;

        const deleteSubscription = navigation?.state?.params?.deleteSubscription;
        const id = navigation?.state?.params?.id;

        console.log({ searchCriteria });

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={navigation.goBack} />
                <Content style={{ width: '100%' }}>
                    <SectionBox>
                        <MainTitle>{`${departurePlace?.placeCode} - ${destinationPlace?.placeCode}`}</MainTitle>
                    </SectionBox>

                    <SectionBox>
                        <DataItem>
                            <Label>Departure city</Label>
                            <Text>{`${departurePlace?.placeName} (${departurePlace?.countryId})`}</Text>
                        </DataItem>

                        <DataItem>
                            <Label>Destination city</Label>
                            <Text>{`${destinationPlace?.placeName} (${destinationPlace?.countryId})`}</Text>
                        </DataItem>

                        <DataItem>
                            <Label>Departure time criteria</Label>

                            {departureDates && !R.isEmpty(departureDates) ? (
                                <Text>{getDescriptiveName({ type: 'TIME_CAL', value: departureDates })}</Text>
                            ) : null}

                            {departureDaysOfWeek && !R.isEmpty(departureDaysOfWeek) ? (
                                <Text>{getDescriptiveName({ type: 'TIME_DAYS', value: departureDaysOfWeek })}</Text>
                            ) : null}
                        </DataItem>

                        <DataItem>
                            <Label>Return time criteria</Label>

                            {returnDates && !R.isEmpty(returnDates) ? (
                                <Text>{getDescriptiveName({ type: 'TIME_CAL', value: returnDates })}</Text>
                            ) : null}

                            {returnDaysOfWeek && !R.isEmpty(returnDaysOfWeek) ? (
                                <Text>{getDescriptiveName({ type: 'TIME_DAYS', value: returnDaysOfWeek })}</Text>
                            ) : null}

                            {daysRange && !R.isEmpty(daysRange) ? (
                                <Text>{getDescriptiveName({ type: 'TIME_RANGE', value: daysRange })}</Text>
                            ) : null}
                        </DataItem>
                    </SectionBox>

                    <SectionBox>
                        <SectionTitle>Filters</SectionTitle>

                        {departureTimeFilter && !R.isEmpty(departureTimeFilter) ? (
                            <DataItem>
                                <Label>Departure between</Label>
                                <Text>{getDescriptiveName({ type: 'TIME_HOUR', value: departureTimeFilter })}</Text>
                            </DataItem>
                        ) : null}

                        {arrivalTimeFilter && !R.isEmpty(arrivalTimeFilter) ? (
                            <DataItem>
                                <Label>Arrival between</Label>
                                <Text>{getDescriptiveName({ type: 'TIME_HOUR', value: arrivalTimeFilter })}</Text>
                            </DataItem>
                        ) : null}

                        {returnDepartureTimeFilter && !R.isEmpty(returnDepartureTimeFilter) ? (
                            <DataItem>
                                <Label>Return departure between </Label>
                                <Text>
                                    {getDescriptiveName({ type: 'TIME_HOUR', value: returnDepartureTimeFilter })}
                                </Text>
                            </DataItem>
                        ) : null}

                        {returnArrivalTimeFilter && !R.isEmpty(returnArrivalTimeFilter) ? (
                            <DataItem>
                                <Label>Return arrival between</Label>
                                <Text>{getDescriptiveName({ type: 'TIME_HOUR', value: returnArrivalTimeFilter })}</Text>
                            </DataItem>
                        ) : null}
                    </SectionBox>

                    <IconBox onPress={() => deleteSubscription({ id, successCb: navigation.goBack })}>
                        <Icon type={generalIcons.TRASH} />
                    </IconBox>

                    <SectionBox>
                        <SectionTitle>Price evolution</SectionTitle>
                    </SectionBox>

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
