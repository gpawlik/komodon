// @flow
import * as React from 'react';
import RangeSlider from 'rn-range-slider';

import { selectors } from '~/theme/main';

import { Container } from './styles';

export class SliderBox extends React.PureComponent {
    render() {
        return (
            <Container>
                <RangeSlider
                    style={{ height: 80 }}
                    gravity={'center'}
                    min={1}
                    max={30}
                    step={1}
                    initialLowValue={5}
                    initialHighValue={7}
                    lineWidth={6}
                    thumbRadius={12}
                    selectionColor="#33495b"
                    blankColor="#f4f5f6"
                    onValueChanged={(low, high) => {
                        this.props.onValueChange(`${low};${high}`);
                    }}
                    labelBackgroundColor="#33495b"
                    labelBorderWidth={0}
                    labelTextColor="#fff"
                    labelPadding={8}
                    labelBorderRadius={10.0}
                    textFormat="%d days"
                />
            </Container>
        );
    }
}
