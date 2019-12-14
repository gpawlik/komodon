// @flow
import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const SingleChoiceOff = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
        <G fill={colour}>
            <Path
                d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z"
                stroke="none"
            />
        </G>
    </Svg>
);
