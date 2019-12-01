// @flow
import * as React from 'react';
import * as R from 'ramda';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { selectors } from '~/theme/main';
import { categories } from '~/domains/filters/constants';

const categoryToColour = R.cond([
    [R.equals(categories.ENVIRONMENT), R.always(selectors.orange)],
    [R.equals(categories.ANIMALS), R.always(selectors.yellow)],
    [R.equals(categories.SOCIAL), R.always(selectors.green)],
    [R.equals(categories.EDUCATION), R.always(selectors.turquoise)],
    [R.T, R.always(selectors.slate)],
]);

type Props = {
    category: string,
};

export const Marker = ({ category }: Props) => {
    return <SVGIcon type={generalIcons.PIN} colour={categoryToColour(category)} size={40} />;
};
