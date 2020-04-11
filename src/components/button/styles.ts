import * as R from 'ramda';
import styled, { css } from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

const getBackgroundColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.chalk)],
    [R.prop('isGhost'), R.always(selectors.white)],
    [R.T, R.always(selectors.midnight)],
]);

const getBorderColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.chalk)],
    [R.prop('isGhost'), R.always(selectors.chalk)],
    [R.T, R.always(selectors.midnight)],
]);

const getTextColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.midnight)],
    [R.prop('isGhost'), R.always(selectors.slate)],
    [R.T, R.always(selectors.white)],
]);

const getMinWidth = R.cond([
    [R.prop('isStretched'), R.always('auto')],
    [R.prop('isXSmall'), R.always('80px')],
    [R.prop('isSmall'), R.always('128px')],
    [R.T, R.always('272px')],
]);

export const buttonStyle = css`
    padding: ${selectors.ss5} ${selectors.ss5};
    margin: ${selectors.ss2} ${selectors.ss3};
    border-radius: ${selectors.br3};
    border-color: ${getBorderColor};
    border-width: 1px;
    align-items: center;
    min-width: ${getMinWidth};
    ${({ isStretched }) => (isStretched ? 'flex: 1' : '')}
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
