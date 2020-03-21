import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    flex-grow: 1;
`;

export const ConfirmBox = styled.View`
    padding: 16px 20px;
    background-color: #fff;
    border-top-width: 0.3;
    border-top-color: #aaa;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
