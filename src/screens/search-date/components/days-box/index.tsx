import * as React from 'react';
import * as R from 'ramda';

import { days } from '~/constants';
import { QuickBox } from '~/components/quick-box';
import { CheckboxCell } from '~/components/cell';

import { Container, Content } from './styles';
import { Props, State } from './types';

export class DaysBox extends React.PureComponent<Props, State> {
    state = {
        selected: {
            Monday: this.props.value.includes(0),
            Tuesday: this.props.value.includes(1),
            Wednesday: this.props.value.includes(2),
            Thursday: this.props.value.includes(3),
            Friday: this.props.value.includes(4),
            Saturday: this.props.value.includes(5),
            Sunday: this.props.value.includes(6),
        },
        selectedAll: false,
    };

    onValueChange = () => {
        const values = R.filter(R.identity)(this.state.selected);
        const indexes = Object.keys(values).map(item => days.indexOf(item));
        this.props.onValueChange(indexes);
    };

    onChange = (value: string) => {
        const { selected } = this.state;
        const newSelected = { ...selected, [value]: !selected[value] };

        this.setState(
            {
                selected: newSelected,
                selectedAll: Object.values(newSelected).every(item => item),
            },
            () => this.onValueChange(),
        );
    };

    onChangeSome = (values: Array<string>) => {
        this.setState(
            {
                selectedAll: false,
                selected: days.reduce((acc, item) => ({ ...acc, [item]: values.includes(item) }), {}),
            },
            () => this.onValueChange(),
        );
    };

    onChangeAll = () => {
        const { selectedAll } = this.state;

        this.setState(
            {
                selectedAll: !selectedAll,
                selected: days.reduce((acc, item) => ({ ...acc, [item]: !selectedAll }), {}),
            },
            () => this.onValueChange(),
        );
    };

    render() {
        const { selected, selectedAll } = this.state;
        return (
            <Container>
                {days.map((item, index) => (
                    <CheckboxCell key={index} title={item} value={selected[item]} onPress={() => this.onChange(item)} />
                ))}
                <CheckboxCell title="All" value={selectedAll} onPress={() => this.onChangeAll()} />

                <Content>
                    <QuickBox
                        onPress={() => this.onChangeSome(['Friday', 'Saturday', 'Sunday'])}
                        text="Weekend escape"
                        description="Flights on Fridays, Saturdays and Sundays"
                    />
                    <QuickBox
                        onPress={() => this.onChangeSome(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])}
                        text="Business trip"
                        description="Flights during weekdays"
                    />
                </Content>
            </Container>
        );
    }
}
