// @flow
import * as React from 'react';

import { SliderBox } from '~/components/slider-box';
import { QuickBox } from '~/components/quick-box';
import { formatDays } from '~/utils/time';

import { Container, Content } from './styles';
import type { Props, State } from './types';

export class DaysRangeBox extends React.PureComponent<Props, State> {
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
                    key={`${from}-${to}`}
                />
                <Content>
                    <QuickBox
                        onPress={() => this.onChange({ from: 2, to: 5 })}
                        text="Few days break"
                        description="Come back in 2-5 days"
                    />

                    <QuickBox
                        onPress={() => this.onChange({ from: 6, to: 10 })}
                        text="One week escape"
                        description="Come back in 6-10 days"
                    />

                    <QuickBox
                        onPress={() => this.onChange({ from: 11, to: 16 })}
                        text="Well deserved holidays"
                        description="Come back in 11-16 days"
                    />

                    <QuickBox
                        onPress={() => this.onChange({ from: 17, to: 30 })}
                        text="Few weeks off"
                        description="Come back in 17-30 days"
                    />
                </Content>
            </Container>
        );
    }
}
