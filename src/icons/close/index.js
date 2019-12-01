// @flow
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const Close = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 35.413 35.413" width={width} height={height}>
        <Path d="M20.535 17.294L34.002 3.827A2 2 0 1 0 31.174.999L17.707 14.466 4.242.999a2 2 0 1 0-2.828 2.828l13.465 13.467L.586 31.587a2 2 0 1 0 2.828 2.828l14.293-14.293L32 34.415c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L20.535 17.294z" />
    </Svg>
);
