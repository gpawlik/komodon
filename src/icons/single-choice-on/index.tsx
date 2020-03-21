import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const SingleChoiceOn = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
        <G fill={colour}>
            <Path
                d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z"
                stroke="none"
            />
        </G>
    </Svg>
);
