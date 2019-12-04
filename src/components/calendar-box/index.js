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

export class CalendarBox extends React.PureComponent<Props> {
    state = {
        isCalendarOpen: true,
    };

    onChange = dates => {
        const keys = Object.keys(dates);
        const from = keys[0];
        const to = keys[keys.length - 1];

        this.props.onValueChange({ from, to });
    };

    render() {
        const { value: { from = '', to } = {}, onValueChange } = this.props;
        const { isCalendarOpen } = this.state;
        const message = to ? [from, to].join(' - ') : from;

        return (
            <Container>
                <SelectedDates message={message} />

                {isCalendarOpen ? (
                    <CalendarDaySelector
                        currentDay={currentTime}
                        onChangeCurrentDay={() => console.log('change current day')}
                        onClickInactiveDay={() => console.log('click inactive day')}
                        onChange={this.onChange}
                        dayLimit={7}
                        timezone={timezone}
                    />
                ) : null}
            </Container>
        );
    }
}
