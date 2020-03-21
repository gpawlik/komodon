import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const LogoFacebook = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 266.9 266.9" width={width} height={height}>
        <Path
            d="M252.2 266.9c8.1 0 14.7-6.6 14.7-14.7V14.7c0-8.1-6.6-14.7-14.7-14.7H14.7C6.6 0 0 6.6 0 14.7v237.4c0 8.1 6.6 14.7 14.7 14.7h237.5z"
            fill="#fff"
        />
        <Path
            fill="#4267b2"
            d="M184.2 266.9V163.5h34.7l5.2-40.3h-39.9V97.5c0-11.7 3.2-19.6 20-19.6h21.3v-36c-3.7-.5-16.4-1.6-31.1-1.6-30.8 0-51.8 18.8-51.8 53.2v29.7h-34.8v40.3h34.8v103.4h41.6z"
        />
    </Svg>
);
