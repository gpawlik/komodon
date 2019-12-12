// @flow
import * as React from 'react';

import { Input } from '~/components/input';
import { Button } from '~/components/button';

import {
    Container,
    DestinationContainer,
    Item,
    InputBox,
    NameBox,
    NameText,
    FullNameText,
    CodeText,
    LastSearchBox,
    LastSearchContainer,
    Title,
    Disclaimer,
    ConfirmBox,
} from './styles';

export class DestinationBoxComponent extends React.PureComponent {
    state = {
        value: this.props.value.placeName || '',
    };

    onChange = (value: string) => {
        this.props.getDestinations({ destination: value });
        this.setState({ value });
    };

    onSelect = (obj: Object) => {
        this.setState({ value: obj.placeName }, () => this.props.onValueChange(obj));
    };

    onReset = () => this.setState({ value: '' });

    render() {
        const { destinations, lastSearches } = this.props;
        const { value } = this.state;

        return (
            <React.Fragment>
                <Container>
                    <InputBox>
                        <Input value={value} onValueChange={this.onChange} showReset={!!value} onReset={this.onReset} />
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
                                        countryName: item.get('countryName'),
                                    })
                                }
                            >
                                <NameBox>
                                    <NameText>{item.get('placeName', '')}</NameText>
                                    <FullNameText>{`${item.get('placeName')}, ${item.get(
                                        'countryName',
                                    )}`}</FullNameText>
                                </NameBox>
                                <CodeText>{item.get('placeCode', '').slice(0, 3)}</CodeText>
                            </Item>
                        ))}
                    </DestinationContainer>

                    {!destinations.size && lastSearches.size ? (
                        <LastSearchContainer>
                            <Title>Your popular destinations</Title>
                            <LastSearchBox>
                                {lastSearches.map(item => (
                                    <Item
                                        key={item.get('placeId')}
                                        onPress={() =>
                                            this.onSelect({
                                                placeId: item.get('placeId'),
                                                placeName: item.get('placeName'),
                                                placeCode: item.get('placeCode'),
                                                countryName: item.get('countryName'),
                                            })
                                        }
                                    >
                                        <NameBox>
                                            <NameText>{item.get('placeName', '')}</NameText>
                                            <FullNameText>{`${item.get('placeName')}, ${item.get(
                                                'countryName',
                                            )}`}</FullNameText>
                                        </NameBox>
                                        <CodeText>{item.get('placeCode', '').slice(0, 3)}</CodeText>
                                    </Item>
                                ))}
                            </LastSearchBox>
                        </LastSearchContainer>
                    ) : null}

                    {!destinations.size && !lastSearches.size ? (
                        <Disclaimer>Use the search box to find the airport</Disclaimer>
                    ) : null}
                </Container>

                {/* <ConfirmBox>
                    <Button message="Select this" onPress={this.props.onSubmit} isDisabled={!this.state.value} />
                </ConfirmBox> */}
            </React.Fragment>
        );
    }
}
