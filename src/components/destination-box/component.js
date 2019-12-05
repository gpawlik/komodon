// @flow
import * as React from 'react';

import { Input } from '~/components/input';

import { Container, DestinationContainer, Item, ItemText } from './styles';

export class DestinationBoxComponent extends React.PureComponent {
    onChange = (value: string) => {
        this.props.getDestinations({ destination: value });
        this.props.onValueChange(value);
    };

    onSelect = (name: string) => {
        this.props.onValueChange(name);
    };

    render() {
        const { destinations, value, onValueChange } = this.props;

        return (
            <Container>
                <Input value={value} onValueChange={this.onChange} />

                <DestinationContainer>
                    {destinations.map(item => (
                        <Item key={item.get('placeId')} onPress={() => this.onSelect(item.get('placeId'))}>
                            <ItemText>{item.get('placeName')}</ItemText>
                        </Item>
                    ))}
                </DestinationContainer>
            </Container>
        );
    }
}
