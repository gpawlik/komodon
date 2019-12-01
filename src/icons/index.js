// @flow
import * as React from 'react';

import { selectors } from '~/theme/main';
import { getIconComponent } from './map';

import type { Props } from './types';

export const SVGIcon = ({ type, colour = selectors.slate, stroke, size = 24 }: Props): React.Node => {
    const iconProps = {
        colour,
        fill: colour,
        stroke,
        width: size,
        height: size,
    };

    return getIconComponent(type, iconProps);
};
