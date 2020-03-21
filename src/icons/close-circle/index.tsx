import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const CloseCircle = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 32 32" width={width} height={height}>
        <Path
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.914 21.086l-2.828 2.828L16 18.828l-5.086 5.086-2.828-2.828L13.172 16l-5.086-5.086 2.828-2.828L16 13.172l5.086-5.086 2.828 2.828L18.828 16l5.086 5.086z"
            fill={colour}
        />
    </Svg>
);
