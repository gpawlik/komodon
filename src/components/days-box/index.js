// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Text } from 'react-native';

import { Container, DayItem, DayText } from './styles';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export class DaysBox extends React.PureComponent {
    state = {
        selected: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        },
        selectedAll: false,
    };

    onValueChange = () => {
        const values = R.filter(R.identity)(this.state.selected);
        this.props.onValueChange(Object.keys(values));
    };

    onChange = (value: number) => {
        const { selected } = this.state;
        const newSelected = { ...selected, [value]: !selected[value] };

        this.setState(
            {
                selected: newSelected,
                selectedAll: Object.values(newSelected).every(item => item),
            },
            () => this.onValueChange()
        );
    };

    onChangeAll = () => {
        const { selectedAll } = this.state;

        this.setState(
            {
                selectedAll: !selectedAll,
                selected: days.reduce((acc, item) => ({ ...acc, [item]: !selectedAll }), {}),
            },
            () => this.onValueChange()
        );
    };

    render() {
        const { selected, selectedAll } = this.state;
        return (
            <Container>
                {days.map((item, index) => (
                    <DayItem isSelected={selected[item]} onPress={() => this.onChange(item)}>
                        <DayText>{item.slice(0, 3)}</DayText>
                    </DayItem>
                ))}
                <DayItem isSelected={selectedAll} onPress={() => this.onChangeAll()}>
                    <DayText>All</DayText>
                </DayItem>
            </Container>
        );
    }
}
