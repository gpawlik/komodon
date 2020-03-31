import * as R from 'ramda';
import styled, { css } from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

const getBackgroundColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.chalk)],
    [R.T, R.always(selectors.midnight)],
]);

const getTextColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.midnight)],
    [R.T, R.always(selectors.white)],
]);

const getMinWidth = R.cond([
    [R.prop('isStretched'), R.always('100%')],
    [R.prop('isXSmall'), R.always('80px')],
    [R.prop('isSmall'), R.always('128px')],
    [R.T, R.always('272px')],
]);

export const buttonStyle = css`
    padding: ${selectors.ss5} ${selectors.ss5};
    margin: ${selectors.ss2};
    border-radius: ${selectors.br3};
    align-items: center;
    min-width: ${getMinWidth};
`;

export const Container = styled.TouchableOpacity`
    background-color: ${getBackgroundColor};
    ${buttonStyle}
`;

export const Text = styled(TextRegular3)`
    color: ${getTextColor};
`;

export const Spinner = styled.ActivityIndicator`
    position: absolute;
    top: 13;
    right: 16;
`;
