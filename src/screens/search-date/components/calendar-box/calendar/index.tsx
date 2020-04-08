import * as React from 'react';
import * as R from 'ramda';
import { Dimensions } from 'react-native';
import moment, { Moment } from 'moment-timezone';
import { CalendarList } from 'react-native-calendars';

import { convertRangeToMarked } from '../utils';

interface Value {
    from: string;
    to?: string;
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
    hasFirstClick: boolean;
    lastMarkedDate: string;
    width: number;
    key: string;
}

const configDateFormat = 'YYYY-MM-DD';

export class CalendarDaySelector extends React.Component<Props, State> {
    state = {
        lastMarkedDate: null,
        hasFirstClick: false,
        // Fix for calendar not appearing on first load
        width: Dimensions.get('screen').width,
        key: 'initial',
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (R.isEmpty(nextProps.value)) {
            return {
                lastMarkedDate: null,
                hasFirstClick: false,
            };
        }

        return null;
    }

    onChangeCurrentDay = value => {
        const newValues = !this.state.hasFirstClick ? { from: value } : { from: this.state.lastMarkedDate, to: value };

        this.props.onChange(newValues);
        this.setState(state => ({
            hasFirstClick: !state.hasFirstClick,
            lastMarkedDate: !state.hasFirstClick && value,
        }));
    };

    handleLayout = () => {
        this.setState({ key: 'ready' });
    };

    render() {
        const { timezone, minDate, maxDate, value } = this.props;
        const { lastMarkedDate, width, key } = this.state;
        const markedDates = convertRangeToMarked(value);
        const today = moment.tz(timezone);

        return (
            <CalendarList
                onLayout={this.handleLayout}
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
                calendarWidth={width}
                key={key}
            />
        );
    }
}
