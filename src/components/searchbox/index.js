// @flow
import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureDates, getReturnDates } from '~/domains/search/selectors';
import { searchFlights } from '~/domains/search/actions';

import { Input } from '~/components/input';
import { Button } from '~/components/button';
import { DestinationBox } from '~/components/destination-box';
import { CalendarBox } from '~/components/calendar-box';
import { DaysBox } from '~/components/days-box';
import { SliderBox } from '~/components/slider-box';
import { ButtonBox } from './components/button-box';
import { ValueBox } from './components/value-box';
import { Container, Label, LabelButton, CriteriaBox } from './styles';

export const SearchboxComponent = props => {
    const [departurePlace, onDepartureChange] = React.useState(props.departurePlace);
    const [destinationPlace, onDestinationChange] = React.useState(props.destinationPlace);

    const [departureDates, onDepartureDatesChange] = React.useState(props.departureDates);
    const [departureDaysOfWeek, onDepartureWeekdaysChange] = React.useState([]);

    const [returnDates, onReturnDatesChange] = React.useState(props.returnDates);
    const [returnDaysOfWeek, onReturnWeekdaysChange] = React.useState([]);
    const [daysRange, onReturnDaysNumberChange] = React.useState({});

    const [focusedField, onFocus] = React.useState('DEP_PLACE');
    const [focusedDepTime, onFocusDepTime] = React.useState('DEP_TIME_CAL');
    const [focusedRetTime, onFocusRetTime] = React.useState('RET_TIME_CAL');

    const departureCriteria = focusedDepTime === 'DEP_TIME_CAL' ? { departureDates } : { departureDaysOfWeek };
    const returnCriteria = R.cond([
        [R.equals('RET_TIME_CAL'), R.always({ returnDates })],
        [R.equals('RET_TIME_DAYS'), R.always({ returnDaysOfWeek })],
        [R.equals('RET_TIME_RANGE'), R.always({ daysRange })],
        [R.T, R.always({})],
    ])(focusedRetTime);

    const onSubmit = () => {
        const payload = {
            departurePlace,
            destinationPlace,
            roundTrip: true,
            filter: {},
            ...departureCriteria,
            ...returnCriteria,
        };
        console.log({ payload });
        //props.searchFlights(payload);
    };

    const getDepTimeBox = R.cond([
        [
            R.equals('DEP_TIME_CAL'),
            () => (
                <CalendarBox value={departureDates} onValueChange={onDepartureDatesChange} maxDate={returnDates.from} />
            ),
        ],
        [R.equals('DEP_TIME_DAYS'), () => <DaysBox onValueChange={onDepartureWeekdaysChange} />],
        [R.T, () => null],
    ]);

    const getRetTimeBox = R.cond([
        [
            R.equals('RET_TIME_CAL'),
            () => <CalendarBox value={returnDates} onValueChange={onReturnDatesChange} minDate={departureDates.from} />,
        ],
        [R.equals('RET_TIME_DAYS'), () => <DaysBox onValueChange={onReturnWeekdaysChange} />],
        [R.equals('RET_TIME_RANGE'), () => <SliderBox onValueChange={onReturnDaysNumberChange} />],
        [R.T, () => null],
    ]);

    const handleFocus = value => {
        onFocus(value === focusedField ? '' : value);
    };

    return (
        <Container>
            <ValueBox
                label="From"
                onPress={() => handleFocus('DEP_PLACE')}
                showContent={focusedField === 'DEP_PLACE'}
                value={departurePlace}
            >
                <DestinationBox value={departurePlace} onValueChange={onDepartureChange} />
            </ValueBox>

            <ValueBox
                label="To"
                onPress={() => handleFocus('DES_PLACE')}
                showContent={focusedField === 'DES_PLACE'}
                value={destinationPlace}
            >
                <DestinationBox value={destinationPlace} onValueChange={onDestinationChange} />
            </ValueBox>

            <ValueBox
                label="Departure Time"
                onPress={() => handleFocus('DEP_TIME')}
                showContent={focusedField === 'DEP_TIME'}
                value={1}
            >
                <ButtonBox
                    onChange={onFocusDepTime}
                    options={[
                        { id: 'DEP_TIME_CAL', text: 'Dates' },
                        { id: 'DEP_TIME_DAYS', text: 'Days of  week' },
                    ]}
                />
                {getDepTimeBox(focusedDepTime)}
            </ValueBox>

            <ValueBox
                label="Return Time"
                onPress={() => handleFocus('RET_TIME')}
                showContent={focusedField === 'RET_TIME'}
                value={1}
            >
                <ButtonBox
                    onChange={onFocusRetTime}
                    options={[
                        { id: 'RET_TIME_CAL', text: 'Dates' },
                        { id: 'RET_TIME_DAYS', text: 'Days of week' },
                        { id: 'RET_TIME_RANGE', text: 'Number Days' },
                    ]}
                />
                {getRetTimeBox(focusedRetTime)}
            </ValueBox>

            <Button message="Search" onPress={onSubmit} />
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
});

const mapDispatchToProps = {
    searchFlights,
};

export const Searchbox = connect(mapStateToProps, mapDispatchToProps)(SearchboxComponent);
