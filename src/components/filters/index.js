// @flow
import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getFilters } from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { SliderBox } from '~/components/slider-box';
import { CheckboxCell } from '~/components/cell';
import { ConfirmBox } from '~/components/confirm-box';

import { Container, Section, SectionTitle } from './styles';

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
};

export const FiltersModalComponent = props => {
    const [stopsFilter, onStopsFilter] = React.useState('ANY');
    return (
        <View style={{ width: '100%' }}>
            <Container>
                <Header backIcon={generalIcons.CLOSE} backAction={() => props.navigation.goBack()} />
                <Section>
                    <SectionTitle>Stops</SectionTitle>
                    <CheckboxCell
                        title="Any"
                        value={stopsFilter === 'ANY'}
                        onPress={() => onStopsFilter('ANY')}
                        hasKeyline
                    />
                    <CheckboxCell
                        title="Direct"
                        value={stopsFilter === 'DIRECT'}
                        onPress={() => onStopsFilter('DIRECT')}
                        hasKeyline
                    />
                    <CheckboxCell
                        title="1 stop or direct"
                        value={stopsFilter === '1_STOP'}
                        onPress={() => onStopsFilter('1_STOP')}
                        hasKeyline
                    />
                    <CheckboxCell
                        title="2 stops or less"
                        value={stopsFilter === '2_STOPS'}
                        onPress={() => onStopsFilter('2_STOPS')}
                    />
                </Section>

                <Section>
                    <SectionTitle message={`Take-off from ${props.departurePlace.placeCode}`} />
                    <SliderBox onValueChange={value => console.log(value)} {...sliderProps} />
                </Section>

                <Section>
                    <SectionTitle message={`Arrival to ${props.destinationPlace.placeCode}`} />
                    <SliderBox onValueChange={value => console.log(value)} {...sliderProps} />
                </Section>

                <Section>
                    <SectionTitle message={`Take-off from ${props.destinationPlace.placeCode}`} />
                    <SliderBox onValueChange={value => console.log(value)} {...sliderProps} />
                </Section>

                <Section>
                    <SectionTitle message={`Arrival to ${props.departurePlace.placeCode}`} />
                    <SliderBox onValueChange={value => console.log(value)} {...sliderProps} />
                </Section>
            </Container>

            <ConfirmBox text="Apply filters" onPress={() => {}} />
        </View>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    filters: getFilters(state),
});

const mapDispatchToProps = {
    setSearchCriteria,
};

export const FiltersModal = connect(mapStateToProps, mapDispatchToProps)(FiltersModalComponent);
