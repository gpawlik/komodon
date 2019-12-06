// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Text } from 'react-native';

import { days } from '~/constants';

import { Container, DayItem, DayText } from './styles';

export class DaysBox extends React.PureComponent {
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
