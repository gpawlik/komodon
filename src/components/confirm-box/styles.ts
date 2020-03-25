import styled from 'styled-components';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    padding: 16px 20px;
    background-color: ${selectors.white};
    border-top-width: 0.3;
    border-top-color: #aaa;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
