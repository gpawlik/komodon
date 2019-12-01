// @flow
import * as R from 'ramda';
import styled from 'styled-components';

import { TextMedium3 } from '~/components/text';

import { selectors } from '~/theme/main';

const getBackgroundColor = R.cond([
    [R.propEq('type', 'WARNING'), R.always(selectors.orange)],
    [R.T, R.always(selectors.red)],
]);

export const Container = styled.TouchableOpacity`
    background-color: ${getBackgroundColor};
    padding: ${selectors.ss3} ${selectors.ss5};
    align-items: center;
`;

export const Text = styled(TextMedium3)`
    color: ${selectors.white};
`;
