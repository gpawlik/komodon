// @flow
import * as React from 'react';

import { Container, ButtonBox, Text } from './styles';

export class TabBar extends React.PureComponent<Props> {
    onChange = index => {
        this.props.onChange(index);
    };

    render() {
        console.log({ props: this.props });
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
