// @flow
import * as React from 'react';
import moment, { type Moment } from 'moment-timezone';
import { Calendar, CalendarList } from 'react-native-calendars';

import { convertRangeToMarked } from '../utils';

type Props = {
    calendar: Array<string>,
    currentDay: Moment,
    onChangeCurrentDay: DayChange,
    onClickInactiveDay?: () => void,
    dayLimit: number,
    selectableDates?: Array<string>,
    timezone: string,
    closeCalendar: () => void,
};

type State = { month: number, current: string };

const configDateFormat = 'YYYY-MM-DD';

export class CalendarDaySelector extends React.Component<Props, State> {
    state = {
        month: this.props.currentDay.month(),
        current: this.props.currentDay.format(configDateFormat),
        markedDates: convertRangeToMarked(this.props.value),
        lastMarkedDate: null,
        hasFirstClick: false,
    };

    onChangeCurrentDay = value => {
        const newValues = !this.state.hasFirstClick
            ? convertRangeToMarked({ from: value })
            : convertRangeToMarked({ from: this.state.lastMarkedDate, to: value });

        this.setState(
            state => {
                return {
                    markedDates: newValues,
                    hasFirstClick: !state.hasFirstClick,
                    lastMarkedDate: !state.hasFirstClick && value,
                };
            },
            () => this.props.onChange(newValues)
        );
    };

    render() {
        const {
            dayLimit,
            currentDay,
            selectableDates,
            onClickInactiveDay,
            onChangeCurrentDay,
            closeCalendar,
            timezone,
            minDate,
            maxDate,
            disableDaysBeforeSelectionPeriod = false,
        } = this.props;
        const { month, current, markedDates, lastMarkedDate } = this.state;

        const today = moment.tz(timezone);

        return (
            <CalendarList
                minDate={lastMarkedDate || minDate || today.format(configDateFormat)}
                maxDate={maxDate}
                onDayPress={({ dateString }) => {
                    const pressedDay = moment.tz(dateString, timezone);
                    if (pressedDay.isBefore(minDate, 'day')) {
                        return;
                    }

                    this.onChangeCurrentDay(dateString);
                }}
                monthFormat={'MMMM'}
                markedDates={markedDates}
                markingType={'period'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={0}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={6}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                style={{ flexGrow: 1 }}
            />
        );
    }
}
