// @flow
import * as React from 'react';
import { InteractionManager, Dimensions } from 'react-native';
import moment, { type Moment } from 'moment-timezone';
import { CalendarList } from 'react-native-calendars';

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
        markedDates: convertRangeToMarked(this.props.value),
        lastMarkedDate: null,
        hasFirstClick: false,
        // Fix for calendar not appearing on first load
        width: Dimensions.get('screen').width,
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
            () => this.props.onChange(newValues),
        );
    };

    render() {
        const { timezone, minDate, maxDate } = this.props;
        const { markedDates, lastMarkedDate, width } = this.state;

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
                //futureScrollRange={undefined}
                // Enable or disable scrolling of calendar list
                //showScrollIndicator
                style={{ flexGrow: 1 }}
                calendarWidth={width}
            />
        );
    }
}
