import * as React from 'react';
import { View } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { SliderBox } from '~/components/slider-box';
import { RadioCell } from '~/components/cell';
import { Button } from '~/components/button';
import { ConfirmBox } from '~/components/confirm-box';
import { filterEmpty } from '~/utils';

import { formatHours } from '~/utils/time';

import { Container, Section, SectionTitle } from './styles';
import { Props } from './types';

const sliderProps = {
    min: 0,
    max: 24,
    step: 1,
    initialLowLevel: 6,
    initialHighLevel: 20,
    textFormat: '%d:00',
    thumbBorderColor: '#33495b',
    thumbColor: '#fff',
    thumbRadius: 14,
    thumbBorderWidth: 10,
    formatter: formatHours,
};

export const FiltersModalComponent = (props: Props) => {
    const [stops, onChangeStops] = React.useState(props.filters.stops);
    const [departureTime, onChangeDepartureTime] = React.useState(props.filters.departureTime || {});
    const [arrivalTime, onChangeArrivalTime] = React.useState(props.filters.arrivalTime || {});
    const [returnDepartureTime, onChangeReturnDepartureTime] = React.useState(props.filters.returnDepartureTime || {});
    const [returnArrivalTime, onChangeReturnArrivalTime] = React.useState(props.filters.returnArrivalTime || {});

    const onSubmit = () => {
        props.setSearchCriteria({
            filters: filterEmpty({
                stops,
                departureTime,
                arrivalTime,
                returnDepartureTime,
                returnArrivalTime,
            }),
        });
        props.navigation?.goBack();
    };

    return (
        <View style={{ width: '100%' }}>
            <Container>
                <Header backIcon={generalIcons.CLOSE} backAction={() => props.navigation?.goBack()} />
                <Section>
                    <SectionTitle>Stops</SectionTitle>
                    <RadioCell
                        title="Any"
                        value={stops === undefined}
                        onPress={() => onChangeStops(undefined)}
                        hasKeyline
                    />
                    <RadioCell title="Direct" value={stops === 0} onPress={() => onChangeStops(0)} hasKeyline />
                    <RadioCell
                        title="1 stop or direct"
                        value={stops === 1}
                        onPress={() => onChangeStops(1)}
                        hasKeyline
                    />
                    <RadioCell title="2 stops or less" value={stops === 2} onPress={() => onChangeStops(2)} />
                </Section>

                <Section>
                    <SectionTitle message={`Take-off from ${props.departurePlace.placeCode}`} />
                    <SliderBox
                        initialLowLevel={departureTime.from}
                        initialHighLevel={departureTime.to}
                        onValueChange={onChangeDepartureTime}
                        {...sliderProps}
                    />
                </Section>

                <Section>
                    <SectionTitle message={`Arrival to ${props.destinationPlace.placeCode}`} />
                    <SliderBox
                        initialLowLevel={arrivalTime.from}
                        initialHighLevel={arrivalTime.to}
                        onValueChange={onChangeArrivalTime}
                        {...sliderProps}
                    />
                </Section>

                <Section>
                    <SectionTitle message={`Take-off from ${props.destinationPlace.placeCode}`} />
                    <SliderBox
                        initialLowLevel={returnDepartureTime.from}
                        initialHighLevel={returnDepartureTime.to}
                        onValueChange={onChangeReturnDepartureTime}
                        {...sliderProps}
                    />
                </Section>

                <Section>
                    <SectionTitle message={`Arrival to ${props.departurePlace.placeCode}`} />
                    <SliderBox
                        initialLowLevel={returnArrivalTime.from}
                        initialHighLevel={returnArrivalTime.to}
                        onValueChange={onChangeReturnArrivalTime}
                        {...sliderProps}
                    />
                </Section>
            </Container>

            <ConfirmBox>
                <Button message="Apply filters" onPress={onSubmit} />
            </ConfirmBox>
        </View>
    );
};
