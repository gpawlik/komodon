// @flow
import * as React from 'react';
import moment, { type Moment } from 'moment-timezone';
import { type DateRange, extendMoment } from 'moment-range';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { Input } from '~/components/input';

import { CalendarDaySelector } from './calendar';
import { Container, SelectedDates } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

const momentRange = extendMoment(moment);
const currentTime = moment();
const timezone = 'Europe/London';
const DATE_FORMAT = 'YYYY-MM-DD';

const getCalendar = () => {
    const calendarRange = [1, 'month'];
    const start = currentTime.clone().subtract(...calendarRange);
    const end = currentTime;
    const range = momentRange
        .range(start, end)
        .snapTo('day')
        .by('days');

    return Array.from(range)
        .reverse()
        .map(date => moment.tz(date, timezone).format(DATE_FORMAT));
};

export class CalendarBox extends React.PureComponent<Props> {
    state = {
        isCalendarOpen: true,
    };

    render() {
        const { value, onValueChange } = this.props;
        const { isCalendarOpen } = this.state;

        return (
            <Container>
                <SelectedDates message={value} />

                {isCalendarOpen ? (
                    <CalendarDaySelector
                        calendar={getCalendar()}
                        currentDay={currentTime}
                        onChangeCurrentDay={() => console.log('change current day')}
                        onClickInactiveDay={() => console.log('click inactive day')}
                        dayLimit={7}
                        timezone={timezone}
                    />
                ) : null}
            </Container>
        );
    }
}
