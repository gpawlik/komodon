// @flow
import * as React from 'react';
import RangeSlider from 'rn-range-slider';

import { Container } from './styles';

export class SliderBox extends React.PureComponent {
    render() {
        const {
            min = 1,
            max = 30,
            step = 1,
            initialLowLevel = 5,
            initialHighLevel = 7,
            textFormat = '%d days',
            thumbColor = '#fff',
            thumbRadius = 12,
            thumbBorderWidth = 2,
            thumbBorderColor = '#aaa',
        } = this.props;
        return (
            <Container>
                <RangeSlider
                    style={{ height: 80 }}
                    gravity={'center'}
                    min={min}
                    max={max}
                    step={step}
                    initialLowValue={initialLowLevel}
                    initialHighValue={initialHighLevel}
                    lineWidth={6}
                    thumbRadius={thumbRadius}
                    thumbColor={thumbColor}
                    thumbBorderWidth={thumbBorderWidth}
                    thumbBorderColor={thumbBorderColor}
                    selectionColor="#33495b"
                    blankColor="#f4f5f6"
                    onValueChanged={(from, to) => {
                        this.props.onValueChange({ from, to });
                    }}
                    labelBackgroundColor="#33495b"
                    labelBorderWidth={0}
                    labelTextColor="#fff"
                    labelPadding={8}
                    labelBorderRadius={10.0}
                    textFormat={textFormat}
                    labelStyle="bubble"
                    rangeEnabled
                />
            </Container>
        );
    }
}
