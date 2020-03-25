import * as R from 'ramda';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components';

import { selectors } from '~/theme/main';

const requiresAdditionalSafeAreaPadding = R.cond([
    [R.propEq('OS', 'android'), R.F],
    [R.propEq('Version', '9.3'), R.T],
    [R.T, R.F],
])(Platform);

const iOSStatusBarOffset = css`
    margin-top: 20;
`;

export const SafeView = styled.SafeAreaView`
    flex: 1;
    background-color: ${selectors.white};
    ${requiresAdditionalSafeAreaPadding ? iOSStatusBarOffset : null};
`;
