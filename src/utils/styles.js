// @flow
import * as R from 'ramda';

export const transparentize = (color: string = '', opacity: number = 1): string => {
    return R.compose(
        R.replace('rgb', 'rgba'),
        R.replace(')', `, ${opacity})`)
    )(color);
};
