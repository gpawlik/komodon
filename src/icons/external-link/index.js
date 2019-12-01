// @flow
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import type { InnerProps } from '../types';

export const ExternalLink = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 512 512" width={width} height={height}>
        <Path
            fill={colour}
            d="M412.88 261.464c-11.423 0-20.682 9.259-20.682 20.682v156.879c0 17.43-14.181 31.611-31.612 31.611H72.975c-17.43 0-31.611-14.181-31.611-31.611V151.414c0-17.43 14.181-31.611 31.611-31.611h156.879c11.422 0 20.682-9.26 20.682-20.682 0-11.422-9.26-20.682-20.682-20.682H72.975C32.737 78.439 0 111.176 0 151.414v287.611C0 479.264 32.737 512 72.975 512h287.61c40.239 0 72.976-32.736 72.977-72.975V282.146c0-11.423-9.259-20.682-20.682-20.682zM491.318 0H334.439c-11.423 0-20.682 9.26-20.682 20.682 0 11.422 9.259 20.682 20.682 20.682h136.197v136.197c0 11.422 9.259 20.682 20.682 20.682 11.423 0 20.682-9.26 20.682-20.682V20.682C512 9.26 502.741 0 491.318 0z"
        />
        <Path
            fill={colour}
            d="M505.942 6.058c-8.077-8.076-21.172-8.076-29.249 0l-287.611 287.61c-8.077 8.077-8.077 21.172 0 29.249a20.616 20.616 0 0 0 14.625 6.058c5.294 0 10.587-2.02 14.625-6.058l287.61-287.61c8.077-8.077 8.077-21.172 0-29.249z"
        />
    </Svg>
);
