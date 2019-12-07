// @flow
import * as React from 'react';

import { Container, ButtonBox, Label, Text } from './styles';

export class SectionBox extends React.PureComponent<Props> {
    // state = {
    //     selectedIndex: this.props.isSelected,
    // };

    onChange = index => {
        this.props.onChange(index);
    };

    render() {
        const { label1, text1, label2, text2, selectedIndex } = this.props;

        return (
            <Container>
                <ButtonBox isSelected={selectedIndex === 0} onPress={() => this.onChange(0)}>
                    <Label message={label1} isSelected={selectedIndex === 0} />
                    <Text message={text1} isSelected={selectedIndex === 0} />
                </ButtonBox>
                <ButtonBox isSelected={selectedIndex === 1} onPress={() => this.onChange(1)}>
                    <Label message={label2} isSelected={selectedIndex === 1} />
                    <Text message={text2} isSelected={selectedIndex === 1} />
                </ButtonBox>
            </Container>
        );
    }
}
