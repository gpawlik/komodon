// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureDates } from '~/domains/search/selectors';

import { Input } from '~/components/input';
import { Button } from '~/components/button';
import { DestinationBox } from '~/components/destination-box';
import { CalendarBox } from '~/components/calendar-box';
import { DaysBox } from '~/components/days-box';
import { SliderBox } from '~/components/slider-box';
import { Container, Label } from './styles';

export const SearchboxComponent = props => {
    const [departurePlace, onDepartureChange] = React.useState(props.departurePlace);
    const [destinationPlace, onDestinationChange] = React.useState(props.destinationPlace);

    const [departureDates, onDepartureDatesChange] = React.useState(props.departureDates);
    const [departureDaysOfWeek, onDepartureWeekdaysChange] = React.useState([]);

    const [returnDates, onReturnDatesChange] = React.useState({});
    const [returnDaysOfWeek, onReturnWeekdaysChange] = React.useState([]);
    const [daysRange, onReturnDaysNumberChange] = React.useState({});

    function onSubmit() {
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
                departureTime: {
                    from: '00:00',
                    to: '23:59',
                },
                arrivalTime: {
                    from: '00:00',
                    to: '23:59',
                },
                returnDepartureTime: {
                    from: '00:00',
                    to: '23:59',
                },
                returnArrivalTime: {
                    from: '00:00',
                    to: '23:59',
                },
                stops: 0,
            },
        };
        console.log({ payload });
    }

    return (
        <Container>
            <Label>From</Label>
            <DestinationBox value={departurePlace} onValueChange={onDepartureChange} />

            <Label>To</Label>
            <DestinationBox value={destinationPlace} onValueChange={onDestinationChange} />

            <Label>Departure Dates</Label>
            <CalendarBox value={departureDates} onValueChange={onDepartureDatesChange} />

            <Label>Departure Days of week</Label>
            <Label>{departureDaysOfWeek.join(',')}</Label>
            <DaysBox onValueChange={onDepartureWeekdaysChange} />

            <Label>Return Dates</Label>
            <CalendarBox value={returnDates} onValueChange={onReturnDatesChange} />

            <Label>Return Days of week</Label>
            <Label>{returnDaysOfWeek.join(',')}</Label>
            <DaysBox onValueChange={onReturnWeekdaysChange} />

            <Label>Return Number Days</Label>
            <Label>{`${daysRange.from};${daysRange.to}`}</Label>
            <SliderBox onValueChange={onReturnDaysNumberChange} />

            <Button message="Search" onPress={onSubmit} />
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
});

export const Searchbox = connect(mapStateToProps, null)(SearchboxComponent);
