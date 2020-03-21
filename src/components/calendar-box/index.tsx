import * as React from 'react';

import { CalendarDaySelector } from './calendar';
import { convertMarkedToRange } from './utils';
import { Container } from './styles';

interface Value {
    from: string;
    to: string;
}

interface Props {
    minDate?: string;
    maxDate?: string;
    onValueChange: (arg0: Value) => void;
    value: Value;
}

const timezone = 'Europe/London';

export class CalendarBox extends React.PureComponent<Props> {
    onChange = dates => {
        const range = convertMarkedToRange(dates);
        this.props.onValueChange(range);
    };

    render() {
        const { value, minDate, maxDate } = this.props;

        return (
            <Container>
                <CalendarDaySelector
                    value={value}
                    onChange={this.onChange}
                    timezone={timezone}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </Container>
        );
    }
}
