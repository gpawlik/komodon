// @flow
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const Swap = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 512 512" width={width} height={height}>
        <Path
            d="M386.329 267.998l120.002-90.001c7.559-5.654 7.559-18.34 0-23.994L386.329 64.002c-9.844-7.399-23.994-.355-23.994 11.997V121H77.332c-8.291 0-15 6.709-15 15v60c0 8.291 6.709 14.8 15 14.8h285.003V256c0 12.363 14.16 19.389 23.994 11.998zM149.995 436.003v-45.201h285.004c8.291 0 15-6.509 15-14.8v-60.001c0-8.291-6.709-15-15-15H149.996V256c0-12.353-14.15-19.396-23.994-11.997L6 334.005c-8.006 5.989-7.994 18.014 0 23.994L126.001 448c9.834 7.391 23.994.365 23.994-11.997z"
            fill={colour}
        />
    </Svg>
);
