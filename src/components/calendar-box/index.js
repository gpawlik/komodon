// @flow
import * as React from 'react';
import moment, { type Moment } from 'moment-timezone';
import { type DateRange, extendMoment } from 'moment-range';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { Input } from '~/components/input';

import { CalendarDaySelector } from './calendar';
import { convertMarkedToRange } from './utils';
import { Container, SelectedDates } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

const momentRange = extendMoment(moment);
const currentTime = moment();
const timezone = 'Europe/London';
const DATE_FORMAT = 'YYYY-MM-DD';

export class CalendarBox extends React.PureComponent<Props> {
    state = {
        isCalendarOpen: true,
    };

    onChange = dates => {
        const range = convertMarkedToRange(dates);
        this.props.onValueChange(range);
    };

    render() {
        const { value, onValueChange, minDate, maxDate } = this.props;
        const { isCalendarOpen } = this.state;
        const { from = '', to } = value;
        const message = to ? [from, to].join(' - ') : from;

        return (
            <Container>
                <SelectedDates message={message} />

                {isCalendarOpen ? (
                    <CalendarDaySelector
                        currentDay={currentTime}
                        onChangeCurrentDay={() => console.log('change current day')}
                        onClickInactiveDay={() => console.log('click inactive day')}
                        value={value}
                        onChange={this.onChange}
                        dayLimit={7}
                        timezone={timezone}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                ) : null}
            </Container>
        );
    }
}
