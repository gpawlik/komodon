import * as React from 'react';

import { CalendarDaySelector } from './calendar';
import { Container } from './styles';

interface Value {
    from: string;
    to?: string;
}

interface Props {
    minDate?: string;
    maxDate?: string;
    onValueChange: (arg0: Value) => void;
    value: Value;
}

const timezone = 'Europe/London';

export class CalendarBox extends React.PureComponent<Props> {
    render() {
        const { value, minDate, maxDate, onValueChange } = this.props;

        return (
            <Container>
                <CalendarDaySelector
                    value={value}
                    onChange={onValueChange}
                    timezone={timezone}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </Container>
        );
    }
}
