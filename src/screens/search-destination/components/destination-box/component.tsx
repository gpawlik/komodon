import * as React from 'react';

import { Input } from '~/components/input';
import { QuickBox } from '~/components/quick-box';

import { searchOptions } from '~/domains/destinations/constants';
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
    QuickBoxContainer,
} from './styles';
import { Props, State } from './types';

export class DestinationBoxComponent extends React.PureComponent<Props, State> {
    state = {
        value: this.props.value.placeName || '',
    };

    onChange = (value: string) => {
        this.props.getDestinations({ destination: value });
        this.setState({ value });
    };

    onSelect = (obj: any) => {
        this.setState({ value: obj.placeName }, () => this.props.onValueChange(obj));
    };

    onReset = () => this.setState({ value: '' });

    isValidItem = item => {
        return item && typeof item.get === 'function' && item.get('placeId') !== this.props.exludePlaceId;
    };

    render() {
        const { destinations, lastSearches, isDestination } = this.props;
        const { value } = this.state;
        const validDestinations = destinations.filter(this.isValidItem);
        const validLastSearches = lastSearches.filter(this.isValidItem);

        return (
            <React.Fragment>
                <Container>
                    <InputBox>
                        <Input value={value} onValueChange={this.onChange} showReset={!!value} onReset={this.onReset} />
                    </InputBox>

                    <DestinationContainer>
                        {validDestinations.map(item => {
                            return (
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
                            );
                        })}
                    </DestinationContainer>

                    {!destinations.size && validLastSearches.size ? (
                        <LastSearchContainer>
                            <Title>Your popular destinations</Title>
                            <LastSearchBox>
                                {validLastSearches.map(item => {
                                    return (
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
                                    );
                                })}
                            </LastSearchBox>
                        </LastSearchContainer>
                    ) : null}

                    {!destinations.size && !validLastSearches.size ? (
                        <Disclaimer>Use the search box to find the airport</Disclaimer>
                    ) : null}

                    {!destinations.size && isDestination ? (
                        <QuickBoxContainer>
                            <QuickBox
                                text="Can't decide where?"
                                description="Click here to search Anywhere"
                                onPress={() =>
                                    this.onSelect({
                                        placeId: searchOptions.EVERYWHERE,
                                        placeName: searchOptions.EVERYWHERE,
                                        placeCode: searchOptions.EVERYWHERE_ID,
                                        countryName: '',
                                    })
                                }
                            />
                        </QuickBoxContainer>
                    ) : null}
                </Container>
            </React.Fragment>
        );
    }
}
