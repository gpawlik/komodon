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

    const onSubmit = () => {
        const payload = {
            departurePlace,
            destinationPlace,
            roundTrip: true,
            departureDates,
            returnDates,
            daysRange,
            departureDaysOfWeek,
            returnDaysOfWeek,
            filter: {
                // departureTime: {
                //     from: '00:00',
                //     to: '23:59',
                // },
                // arrivalTime: {
                //     from: '00:00',
                //     to: '23:59',
                // },
                // returnDepartureTime: {
                //     from: '00:00',
                //     to: '23:59',
                // },
                // returnArrivalTime: {
                //     from: '00:00',
                //     to: '23:59',
                // },
                // stops: 0,
            },
        };
        props.searchFlights(payload);
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

    return (
        <Container>
            <LabelButton onPress={() => onFocus('DEP_PLACE')}>
                <Label>From</Label>
            </LabelButton>
            {focusedField === 'DEP_PLACE' ? (
                <DestinationBox value={departurePlace} onValueChange={onDepartureChange} />
            ) : null}

            <LabelButton onPress={() => onFocus('DES_PLACE')}>
                <Label>To</Label>
            </LabelButton>
            {focusedField === 'DES_PLACE' ? (
                <DestinationBox value={destinationPlace} onValueChange={onDestinationChange} />
            ) : null}

            <LabelButton onPress={() => onFocus('DEP_TIME')}>
                <Label>Departure Time</Label>
            </LabelButton>

            {focusedField === 'DEP_TIME' ? (
                <CriteriaBox>
                    <ButtonBox
                        onChange={onFocusDepTime}
                        options={[
                            { id: 'DEP_TIME_CAL', text: 'Dates' },
                            { id: 'DEP_TIME_DAYS', text: 'Days of  week' },
                        ]}
                    />
                    {getDepTimeBox(focusedDepTime)}
                </CriteriaBox>
            ) : null}

            <LabelButton onPress={() => onFocus('RET_TIME')}>
                <Label>Departure Time</Label>
            </LabelButton>

            {focusedField === 'RET_TIME' ? (
                <CriteriaBox>
                    <ButtonBox
                        onChange={onFocusRetTime}
                        options={[
                            { id: 'RET_TIME_CAL', text: 'Dates' },
                            { id: 'RET_TIME_DAYS', text: 'Days of week' },
                            { id: 'RET_TIME_RANGE', text: 'Number Days' },
                        ]}
                    />
                    {getRetTimeBox(focusedRetTime)}
                </CriteriaBox>
            ) : null}

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
