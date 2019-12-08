// @flow
import * as React from 'react';

import { Input } from '~/components/input';

import { Container, DestinationContainer, Item, InputBox, NameBox, NameText, FullNameText, CodeText } from './styles';

export class DestinationBoxComponent extends React.PureComponent {
    onChange = (value: string) => {
        this.props.getDestinations({ destination: value });
        this.props.onValueChange(value);
    };

    onSelect = (obj: Object) => {
        this.props.onValueChange(obj);
    };

    render() {
        const { destinations, value } = this.props;

        return (
            <Container>
                <InputBox>
                    <Input value={value.placeName} onValueChange={this.onChange} />
                </InputBox>

                <DestinationContainer>
                    {destinations.map(item => (
                        <Item
                            key={item.get('placeId')}
                            onPress={() =>
                                this.onSelect({
                                    placeId: item.get('placeId'),
                                    placeName: item.get('placeName'),
                                    placeCode: item.get('placeCode'),
                                })
                            }
                        >
                            <NameBox>
                                <NameText>{item.get('placeName')}</NameText>
                                <FullNameText>{`${item.get('placeName')}, ${item.get('countryName')}`}</FullNameText>
                            </NameBox>
                            <CodeText>{item.get('placeCode')}</CodeText>
                        </Item>
                    ))}
                </DestinationContainer>
            </Container>
        );
    }
}
