// @flow
import * as React from 'react';
import moment, { type Moment } from 'moment-timezone';
import { extendMoment } from 'moment-range';
import { Calendar } from 'react-native-calendars';

type Props = {
    calendar: Array<string>,
    currentDay: Moment,
    onChangeCurrentDay: DayChange,
    onClickInactiveDay?: () => void,
    dayLimit: number,
    selectableDates?: Array<string>,
    timezone: string,
    closeCalendar: () => void,
    disableDaysBeforeSelectionPeriod?: boolean,
};

type State = { month: number, current: string };

const configDateFormat = 'YYYY-MM-DD';
const momentRange = extendMoment(moment);

const makeRange = (start, end) => {
    if (!end) {
        return { [start]: { color: 'green', textColor: 'white', selected: true, startingDay: true, endingDay: true } };
    }
    const startMoment = moment(start);
    const endMoment = moment(end);

    const range = momentRange
        .range(startMoment, endMoment)
        .snapTo('day')
        .by('days');
    const arr = Array.from(range).map(date => moment(date).format(configDateFormat));

    return arr.reduce(
        (acc, item, idx) => ({
            ...acc,
            [item]: {
                color: 'green',
                textColor: 'white',
                selected: true,
                startingDay: idx === 0,
                endingDay: idx === arr.length - 1,
            },
        }),
        {}
    );
};

export class CalendarDaySelector extends React.Component<Props, State> {
    state = {
        month: this.props.currentDay.month(),
        current: this.props.currentDay.format(configDateFormat),
        markedDates: {},
        lastMarkedDate: null,
        hasFirstClick: false,
    };

    onChangeCurrentDay = value => {
        console.log({ value });
        this.setState(state => {
            const newValues = !state.hasFirstClick ? makeRange(value) : makeRange(state.lastMarkedDate, value);
            return {
                markedDates: newValues,
                hasFirstClick: !state.hasFirstClick,
                lastMarkedDate: value,
            };
        });
    };

    render() {
        const {
            dayLimit,
            currentDay,
            calendar,
            selectableDates,
            onClickInactiveDay,
            onChangeCurrentDay,
            closeCalendar,
            timezone,
            disableDaysBeforeSelectionPeriod = false,
        } = this.props;
        const { month, current, markedDates } = this.state;

        const minDate = moment.tz(timezone);

        return (
            <Calendar
                //current={current}
                minDate={minDate.format(configDateFormat)}
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
            />
        );
    }
}
