// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${selectors.midnight};
    z-index: 998;
`;
