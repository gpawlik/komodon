// @flow
import * as React from 'react';

import { Input } from '~/components/input';

import { Container, Item, ItemText } from './styles';

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
                {destinations.map(item => (
                    <Item key={item.get('placeId')} onPress={() => this.onSelect(item.get('cityName'))}>
                        <ItemText>{item.get('placeName')}</ItemText>
                    </Item>
                ))}
            </Container>
        );
    }
}
