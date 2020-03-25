import styled from 'styled-components';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Box = styled.View`
    background-color: ${selectors.white};
    border-radius: 6;
    margin-vertical: 20;
    max-width: 350;
    min-height: 200;
`;
