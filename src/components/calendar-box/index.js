// @flow
import * as React from 'react';
//import { InteractionManager } from 'react-native';

import { CalendarDaySelector } from './calendar';
import { convertMarkedToRange } from './utils';
import { Container } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

const timezone = 'Europe/London';

export class CalendarBox extends React.PureComponent<Props> {
    onChange = dates => {
        const range = convertMarkedToRange(dates);
        this.props.onValueChange(range);
    };

    // componentDidMount() {
    //     InteractionManager.runAfterInteractions(() => this.setState());
    // }

    render() {
        const { value, minDate, maxDate } = this.props;

        console.log('CALENDARQ');

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
