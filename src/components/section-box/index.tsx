import * as React from 'react';

import { Container, ButtonBox, Label, Text } from './styles';

interface Props {
    label1: string;
    text1: string;
    label2: string;
    text2: string;
    selectedIndex: number;
    roundTrip: boolean;
    onChange: (arg0: string) => void;
}

export class SectionBox extends React.PureComponent<Props> {
    onChange = index => {
        this.props.onChange(index);
    };

    render() {
        const { label1, text1, label2, text2, selectedIndex, roundTrip } = this.props;

        return (
            <Container>
                <ButtonBox isSelected={selectedIndex === 0} isSingle={!roundTrip} onPress={() => this.onChange(0)}>
                    <Label message={label1} isSelected={selectedIndex === 0} />
                    <Text message={text1} isSelected={selectedIndex === 0} />
                </ButtonBox>
                {roundTrip ? (
                    <ButtonBox isSelected={selectedIndex === 1} onPress={() => this.onChange(1)}>
                        <Label message={label2} isSelected={selectedIndex === 1} />
                        <Text message={text2} isSelected={selectedIndex === 1} />
                    </ButtonBox>
                ) : null}
            </Container>
        );
    }
}
