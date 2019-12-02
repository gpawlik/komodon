// @flow
import * as React from 'react';

import { Input } from '~/components/input';
import { Button } from '~/components/button';
import { CalendarBox } from '~/components/calendar-box';
import { Container, Label } from './styles';

export const Searchbox = () => {
    const [departure, onDepartureChange] = React.useState('');
    const [destination, onDestinationChange] = React.useState('');

    const [departureDates, onDepartureDatesChange] = React.useState('aaa');
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
            <Input value={departureWeekdays} onValueChange={onDepartureWeekdaysChange} />

            <Label>Return Dates</Label>
            <Input value={returnDates} onValueChange={onReturnDatesChange} />

            <Label>Return Days of week</Label>
            <Input value={returnWeekdays} onValueChange={onReturnWeekdaysChange} />

            <Label>Return Number Days</Label>
            <Input value={returnDaysNumber} onValueChange={onReturnDaysNumberChange} />

            <Button message="Search" />
        </Container>
    );
};
