import * as React from 'react';

import { selectors } from '~/theme/main';
import { getIconComponent } from './map';

import { Props } from './types';

export const SVGIcon = ({ type, colour = selectors.slate, stroke, size = 24, width, height }: Props): React.Node => {
    const iconProps = {
        colour,
        fill: colour,
        stroke,
        width: width || size,
        height: height || size,
    };

    return getIconComponent(type, iconProps);
};
