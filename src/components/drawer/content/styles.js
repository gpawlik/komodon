// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    width: ${({ style }) => style.width};
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${selectors.chalk};
    align-items: stretch;
    align-content: stretch;
    left: -${({ style }) => style.width};
`;
