// @flow
import * as React from 'react';
import moment from 'moment-timezone';

import { CalendarDaySelector } from './calendar';
import { convertMarkedToRange } from './utils';
import { Container } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

const currentTime = moment();
const timezone = 'Europe/London';

export class CalendarBox extends React.PureComponent<Props> {
    state = {
        isCalendarOpen: true,
    };

    onChange = dates => {
        const range = convertMarkedToRange(dates);
        this.props.onValueChange(range);
    };

    render() {
        const { value, minDate, maxDate } = this.props;
        const { isCalendarOpen } = this.state;

        return (
            <Container>
                {isCalendarOpen ? (
                    <CalendarDaySelector
                        currentDay={currentTime}
                        value={value}
                        onChange={this.onChange}
                        timezone={timezone}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                ) : null}
            </Container>
        );
    }
}
