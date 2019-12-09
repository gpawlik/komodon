// @flow
import * as React from 'react';

import { SliderBox } from '~/components/slider-box';
import { formatDays } from '~/utils/time';

import { Container, Content, QuickBox, NameText, DescriptionText } from './styles';

export class DaysRangeBox extends React.PureComponent {
    state = {
        from: 5,
        to: 10,
    };

    onChange = ({ from, to }) => {
        this.setState({ from, to });
        this.props.onChange({ from, to });
    };

    render() {
        const { onChange } = this.props;
        const { from, to } = this.state;
        return (
            <Container>
                <SliderBox
                    onValueChange={onChange}
                    formatter={formatDays}
                    initialLowLevel={from}
                    initialHighLevel={to}
                />
                <Content>
                    <QuickBox onPress={() => this.onChange({ from: 2, to: 5 })}>
                        <NameText>Few days break</NameText>
                        <DescriptionText>Come back in 2-5 days</DescriptionText>
                    </QuickBox>

                    <QuickBox onPress={() => this.onChange({ from: 6, to: 10 })}>
                        <NameText>One week escape</NameText>
                        <DescriptionText>Come back in 6-10 days</DescriptionText>
                    </QuickBox>

                    <QuickBox onPress={() => this.onChange({ from: 11, to: 16 })}>
                        <NameText>Well deserved holidays</NameText>
                        <DescriptionText>Come back in 11-16 days</DescriptionText>
                    </QuickBox>

                    <QuickBox onPress={() => this.onChange({ from: 17, to: 30 })}>
                        <NameText>Few weeks off</NameText>
                        <DescriptionText>Come back in 17-30 days</DescriptionText>
                    </QuickBox>
                </Content>
            </Container>
        );
    }
}
