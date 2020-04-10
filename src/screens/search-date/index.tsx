import * as React from 'react';
import * as R from 'ramda';
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
import { DateCriteriaBox } from '~/components/date-criteria-box';
import { Button } from '~/components/button';
import { ReduxState } from '~/types';

import { CalendarBox } from './components/calendar-box';
import { DaysBox } from './components/days-box';
import { DaysRangeBox } from './components/days-range-box';
import { ButtonBox } from './components/button-box';
import { getDescriptiveName } from './utils';

import { Container, SelectionBox, ConfirmBox } from './styles';

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

    const [isDepartureModified, onDepartureModify] = React.useState(false);
    const [isReturnModified, onReturnModify] = React.useState(false);

    const [focusedField, onFocusTab] = React.useState(props.navigation.getParam('focused'));

    const roundTrip = props.navigation.getParam('roundTrip');

    const handleDepartureDatesChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_CAL', value });
        onDepDescriptiveName(name);
        onDepartureDatesChange(value);
        onDepartureModify(true);
    };

    const handleDepartureWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_DAYS', value });
        onDepDescriptiveName(name);
        onDepartureWeekdaysChange(value);
        onDepartureModify(true);
    };

    const handleReturnDatesChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_CAL', value });
        onRetDescriptiveName(name);
        onReturnDatesChange(value);
        onReturnModify(true);
    };

    const handleReturnWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_DAYS', value });
        onRetDescriptiveName(name);
        onReturnWeekdaysChange(value);
        onReturnModify(true);
    };

    const handleReturnDaysNumberChange = (value: any) => {
        const name = getDescriptiveName({ type: 'RET_TIME_RANGE', value });
        onRetDescriptiveName(name);
        onReturnDaysNumberChange(value);
        onReturnModify(true);
    };

    const closeModal = () => props.navigation.goBack();

    const onSubmitDeparture = () => {
        props.setSearchCriteria({ departureDates, departureDaysOfWeek, departureText });

        if (returnText !== '' || !roundTrip) {
            closeModal();
        } else {
            onFocusTab(1);
        }
    };

    const onSubmitReturn = () => {
        props.setSearchCriteria({ returnDates, returnDaysOfWeek, daysRange, returnText });

        if (departureText !== '') {
            closeModal();
        } else {
            onFocusTab(0);
        }
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
            () => (
                <DaysBox
                    key={departureDaysOfWeek.join()} // Force re-render when reset
                    value={departureDaysOfWeek}
                    onValueChange={handleDepartureWeekdaysChange}
                />
            ),
        ],
        [R.T, () => null],
    ]);

    const getRetTimeBox = R.cond([
        [
            R.equals('RET_TIME_CAL'),
            () => (
                <CalendarBox value={returnDates} onValueChange={handleReturnDatesChange} minDate={departureDates.to} />
            ),
        ],
        [
            R.equals('RET_TIME_DAYS'),
            () => (
                <DaysBox
                    key={returnDaysOfWeek.join()} // Force re-render when reset
                    value={returnDaysOfWeek}
                    onValueChange={handleReturnWeekdaysChange}
                />
            ),
        ],
        [R.equals('RET_TIME_RANGE'), () => <DaysRangeBox onChange={handleReturnDaysNumberChange} />],
        [R.T, () => null],
    ]);

    const isDepartureSelection = focusedField === 0;
    const isReturnSelection = focusedField === 1 && roundTrip;

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
                onChange={onFocusTab}
            />

            {isDepartureSelection ? (
                <>
                    <DateCriteriaBox
                        onPress={() => {}}
                        exactDates={departureDates}
                        daysOfWeek={departureDaysOfWeek}
                        onExactDatesChange={() => handleDepartureDatesChange({})}
                        onDaysOfWeekChange={() => handleDepartureWeekdaysChange([])}
                        onPressItem={onFocusDepTime}
                        isDeparture
                    />
                    <SelectionBox>{getDepTimeBox(focusedDepTime)}</SelectionBox>
                </>
            ) : null}
            {isReturnSelection ? (
                <>
                    <DateCriteriaBox
                        onPress={() => {}}
                        exactDates={returnDates}
                        daysOfWeek={returnDaysOfWeek}
                        daysRange={daysRange}
                        onExactDatesChange={() => handleReturnDatesChange({})}
                        onDaysOfWeekChange={() => handleReturnWeekdaysChange([])}
                        onDaysRangeChange={() => handleReturnDaysNumberChange({})}
                        onPressItem={onFocusRetTime}
                    />
                    <SelectionBox>{getRetTimeBox(focusedRetTime)}</SelectionBox>
                </>
            ) : null}

            <ConfirmBox>
                {isDepartureSelection ? (
                    <Button
                        message="Confirm departure time"
                        onPress={onSubmitDeparture}
                        isDisabled={!isDepartureModified || departureText === ''}
                    />
                ) : (
                    <Button
                        message="Confirm return time"
                        onPress={onSubmitReturn}
                        isDisabled={!isReturnModified || returnText === ''}
                    />
                )}
            </ConfirmBox>
        </Container>
    );
};

export const mapStateToProps = (state: ReduxState) => ({
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
