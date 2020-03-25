import * as React from 'react';

import { Container, ButtonBox, Text } from './styles';

interface Props {
    onChange: (arg0: number) => void;
    tabItems: Array<string>;
    selectedIndex: number;
    width: number;
}

export class TabBar extends React.PureComponent<Props> {
    onChange = index => {
        this.props.onChange(index);
    };

    render() {
        const { tabItems = [], selectedIndex, onChange } = this.props;

        return (
            <Container>
                {tabItems.map((item, index) => (
                    <ButtonBox key={index} isSelected={selectedIndex === index} onPress={() => onChange(index)}>
                        <Text message={item} isSelected={selectedIndex === index} />
                    </ButtonBox>
                ))}
            </Container>
        );
    }
}
