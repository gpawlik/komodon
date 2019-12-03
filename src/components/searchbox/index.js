// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureDates } from '~/domains/search/selectors';

import { Input } from '~/components/input';
import { Button } from '~/components/button';
import { CalendarBox } from '~/components/calendar-box';
import { DaysBox } from '~/components/days-box';
import { SliderBox } from '~/components/slider-box';
import { Container, Label } from './styles';

export const SearchboxComponent = props => {
    const [departure, onDepartureChange] = React.useState(props.departurePlace);
    const [destination, onDestinationChange] = React.useState(props.destinationPlace);

    const [departureDates, onDepartureDatesChange] = React.useState(props.departureDates);
    const [departureWeekdays, onDepartureWeekdaysChange] = React.useState([]);

    const [returnDates, onReturnDatesChange] = React.useState('');
    const [returnWeekdays, onReturnWeekdaysChange] = React.useState([]);
    const [returnDaysNumber, onReturnDaysNumberChange] = React.useState('');

    return (
        <Container>
            <Label>From</Label>
            <Input value={departure} onValueChange={onDepartureChange} />
            <Label>To</Label>
            <Input value={destination} onValueChange={onDestinationChange} />

            <Label>Departure Dates</Label>
            <CalendarBox value={departureDates} onValueChange={onDepartureDatesChange} />

            <Label>Departure Days of week</Label>
            <Label>{departureWeekdays.toString()}</Label>
            <DaysBox onValueChange={onDepartureWeekdaysChange} />

            <Label>Return Dates</Label>
            <Input value={returnDates} onValueChange={onReturnDatesChange} />

            <Label>Return Days of week</Label>
            <Label>{returnWeekdays}</Label>
            <DaysBox onValueChange={onReturnWeekdaysChange} />

            <Label>Return Number Days</Label>
            <Label>{returnDaysNumber}</Label>
            <SliderBox value={returnDaysNumber} onValueChange={onReturnDaysNumberChange} />

            <Button message="Search" />
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
});

export const Searchbox = connect(mapStateToProps, null)(SearchboxComponent);
