// @flow
import * as R from 'ramda';
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

const getBackgroundColor = R.cond([
    [R.prop('isDisabled'), R.always(selectors.chalk)],
    [R.T, R.always(selectors.midnight)],
]);

const getTextColor = R.cond([[R.prop('isDisabled'), R.always(selectors.midnight)], [R.T, R.always(selectors.white)]]);

export const Container = styled.TouchableOpacity`
    background-color: ${getBackgroundColor};
    padding: ${selectors.ss5} ${selectors.ss5};
    margin: ${selectors.ss2};
    border-radius: ${selectors.br3};
    align-items: center;
    min-width: 140;
`;

export const Text = styled(TextRegular3)`
    color: ${getTextColor};
`;
