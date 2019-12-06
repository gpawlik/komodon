// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Text } from 'react-native';

import { Container, DayItem, DayText } from './styles';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export class DaysBox extends React.PureComponent {
    state = {
        selected: {
            monday: this.props.value.includes(0),
            tuesday: this.props.value.includes(1),
            wednesday: this.props.value.includes(2),
            thursday: this.props.value.includes(3),
            friday: this.props.value.includes(4),
            saturday: this.props.value.includes(5),
            sunday: this.props.value.includes(6),
        },
        selectedAll: false,
    };

    onValueChange = () => {
        const values = R.filter(R.identity)(this.state.selected);
        const indexes = Object.keys(values).map(item => days.indexOf(item));
        this.props.onValueChange(indexes);
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
        const { selected, selectedAll, isBoxVisible } = this.state;
        return (
            <Container>
                {days.map((item, index) => (
                    <DayItem isSelected={selected[item]} onPress={() => this.onChange(item)} key={index}>
                        <DayText>{item}</DayText>
                    </DayItem>
                ))}
                <DayItem isSelected={selectedAll} onPress={() => this.onChangeAll()}>
                    <DayText>All</DayText>
                </DayItem>
            </Container>
        );
    }
}
