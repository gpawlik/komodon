// @flow
import * as React from 'react';
import * as R from 'ramda';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
    getDepartureDates,
    getReturnDates,
    getDepartureDaysOfWeek,
    getReturnDaysOfWeek,
    getDaysRange,
    getDepartureText,
    getReturnText,
} from '~/domains/search/selectors';
import { setSearchCriteria } from '~/domains/search/actions';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { SectionBox } from '~/components/section-box';
import { Button } from '~/components/button';
import { CalendarBox } from '~/components/calendar-box';
import { DaysBox } from '~/components/days-box';

import { DaysRangeBox } from '~/components/days-range-box';

import { ButtonBox } from './components/button-box';
import { getDescriptiveName } from './utils';

import { Container, ConfirmBox } from './styles';

export const SearchDateModalComponent = props => {
    const [departureDates, onDepartureDatesChange] = React.useState(props.departureDates);
    const [departureDaysOfWeek, onDepartureWeekdaysChange] = React.useState(props.departureDaysOfWeek);

    const [returnDates, onReturnDatesChange] = React.useState(props.returnDates);
    const [returnDaysOfWeek, onReturnWeekdaysChange] = React.useState(props.returnDaysOfWeek);
    const [daysRange, onReturnDaysNumberChange] = React.useState(props.daysRange);

    const [focusedDepTime, onFocusDepTime] = React.useState('DEP_TIME_CAL');
    const [focusedRetTime, onFocusRetTime] = React.useState('RET_TIME_CAL');

    const [departureText, onDepDescriptiveName] = React.useState(props.departureText);
    const [returnText, onRetDescriptiveName] = React.useState(props.returnText);

    const [focusedField, onFocus] = React.useState(props.navigation.getParam('focused'));

    const roundTrip = props.navigation.getParam('roundTrip');

    const handleDepartureDatesChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_CAL', value });
        onDepDescriptiveName(name);
        onDepartureDatesChange(value);
    };

    const handleDepartureWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_DAYS', value });
        onDepDescriptiveName(name);
        onDepartureWeekdaysChange(value);
    };

    const handleReturnDatesChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_CAL', value });
        onRetDescriptiveName(name);
        onReturnDatesChange(value);
    };

    const handleReturnWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_DAYS', value });
        onRetDescriptiveName(name);
        onReturnWeekdaysChange(value);
    };

    const handleReturnDaysNumberChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_RANGE', value });
        onRetDescriptiveName(name);
        onReturnDaysNumberChange(value);
    };

    const closeModal = () => props.navigation.goBack();

    const departureCriteria = focusedDepTime === 'DEP_TIME_CAL' ? { departureDates } : { departureDaysOfWeek };
    const returnCriteria = R.cond([
        [R.equals('RET_TIME_CAL'), R.always({ returnDates })],
        [R.equals('RET_TIME_DAYS'), R.always({ returnDaysOfWeek })],
        [R.equals('RET_TIME_RANGE'), R.always({ daysRange })],
        [R.T, R.always({})],
    ])(focusedRetTime);

    const onSubmit = () => {
        props.setSearchCriteria({ ...departureCriteria, ...returnCriteria, departureText, returnText });
        closeModal();
    };

    const getDepTimeBox = R.cond([
        [
            R.equals('DEP_TIME_CAL'),
            () => (
                <CalendarBox
                    value={departureDates}
                    onValueChange={handleDepartureDatesChange}
                    maxDate={returnDates.from}
                />
            ),
        ],
        [
            R.equals('DEP_TIME_DAYS'),
            () => <DaysBox value={departureDaysOfWeek} onValueChange={handleDepartureWeekdaysChange} />,
        ],
        [R.T, () => null],
    ]);

    const getRetTimeBox = R.cond([
        [
            R.equals('RET_TIME_CAL'),
            () => (
                <CalendarBox
                    value={returnDates}
                    onValueChange={handleReturnDatesChange}
                    minDate={departureDates.from}
                />
            ),
        ],
        [
            R.equals('RET_TIME_DAYS'),
            () => <DaysBox value={returnDaysOfWeek} onValueChange={handleReturnWeekdaysChange} />,
        ],
        [R.equals('RET_TIME_RANGE'), () => <DaysRangeBox onChange={handleReturnDaysNumberChange} />],
        [R.T, () => null],
    ]);

    return (
        <Container>
            <Header backIcon={generalIcons.CLOSE} backAction={closeModal} />
            <SectionBox
                label1="Departure dates"
                text1={departureText || 'Select dates'}
                label2="Return dates"
                text2={returnText || 'Select dates'}
                selectedIndex={focusedField}
                roundTrip={roundTrip}
                onChange={onFocus}
            />

            {focusedField === 0 && (
                <View style={{ height: '100%' }}>
                    <ButtonBox
                        onChange={onFocusDepTime}
                        options={[
                            { id: 'DEP_TIME_CAL', text: 'Dates' },
                            { id: 'DEP_TIME_DAYS', text: 'Days of  week' },
                        ]}
                        selected={focusedDepTime}
                    />
                    {getDepTimeBox(focusedDepTime)}
                </View>
            )}
            {focusedField === 1 && roundTrip && (
                <View style={{ height: '100%' }}>
                    <ButtonBox
                        onChange={onFocusRetTime}
                        options={[
                            { id: 'RET_TIME_CAL', text: 'Dates' },
                            { id: 'RET_TIME_DAYS', text: 'Days of week' },
                            { id: 'RET_TIME_RANGE', text: 'Number Days' },
                        ]}
                        selected={focusedRetTime}
                    />
                    {getRetTimeBox(focusedRetTime)}
                </View>
            )}

            <ConfirmBox>
                <Button message="Select this" onPress={onSubmit} />
            </ConfirmBox>
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
    departureDaysOfWeek: getDepartureDaysOfWeek(state),
    returnDaysOfWeek: getReturnDaysOfWeek(state),
    daysRange: getDaysRange(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
});

const mapDispatchToProps = {
    setSearchCriteria,
};

export const SearchDateModal = connect(mapStateToProps, mapDispatchToProps)(SearchDateModalComponent);
