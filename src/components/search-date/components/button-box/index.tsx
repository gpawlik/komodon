import * as React from 'react';

import { Container, Button, ButtonText } from './styles';

interface Props {
    onChange: (arg0: string) => void;
    options: Array<{ id: string; text: string }>;
    selected: string;
}

export class ButtonBox extends React.Component<Props> {
    render() {
        const { onChange, options = [], selected } = this.props;

        return (
            <Container>
                {options.map(({ id, text }) => (
                    <Button onPress={() => onChange(id)} key={id} isSelected={selected === id}>
                        <ButtonText isSelected={selected === id}>{text}</ButtonText>
                    </Button>
                ))}
            </Container>
        );
    }
}
