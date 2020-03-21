import * as React from 'react';
import { Dimensions } from 'react-native';
import moment, { Moment } from 'moment-timezone';
import { CalendarList } from 'react-native-calendars';

import { convertRangeToMarked } from '../utils';

interface Value {
    from: string;
    to: string;
}

interface Props {
    calendar?: Array<string>;
    currentDay?: Moment;
    onChange: (arg0: Value) => void;
    onClickInactiveDay?: () => void;
    dayLimit?: number;
    selectableDates?: Array<string>;
    timezone: string;
    closeCalendar?: () => void;
    minDate: string;
    maxDate: string;
    value: Value;
}

interface State {
    markedDates: any;
    hasFirstClick: boolean;
    lastMarkedDate: string;
    width: number;
}

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
                pastScrollRange={0}
                style={{ flexGrow: 1 }}
                calendarWidth={width}
            />
        );
    }
}
