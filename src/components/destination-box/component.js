// @flow
import * as React from 'react';

import { Input } from '~/components/input';

import { Container, ItemText } from './styles';

export class DestinationBoxComponent extends React.PureComponent {
    onChange = (value: string) => {
        this.props.getDestinations({ destination: value });
        this.props.onValueChange(value);
    };

    render() {
        const { destinations, value, onValueChange } = this.props;
        return (
            <Container>
                <Input value={value} onValueChange={this.onChange} />
                {destinations.map(item => (
                    <ItemText key={item.get('placeId')}>{item.get('placeName')}</ItemText>
                ))}
            </Container>
        );
    }
}
