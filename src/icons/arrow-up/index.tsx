import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const ArrowUp = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 292.362 292.362" width={width} height={height}>
        <Path
            fill={colour}
            d="M5.427 222.986c3.614 3.617 7.898 5.424 12.848 5.424h255.813c4.952 0 9.233-1.807 12.85-5.424 3.617-3.621 5.424-7.902 5.424-12.851 0-4.948-1.807-9.229-5.424-12.847L159.031 69.381c-3.621-3.617-7.902-5.428-12.85-5.428s-9.233 1.811-12.847 5.428L5.427 197.289C1.814 200.906 0 205.187 0 210.136c0 4.948 1.814 9.229 5.427 12.85z"
        />
    </Svg>
);
