// @flow
import styled from 'styled-components';

import { TextRegular1 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${({ color, isGhost }) => (isGhost ? color : selectors.white)};
    border-color: ${({ color, isGhost }) => (isGhost ? selectors.white : color)};
    border-width: 1;
    border-radius: ${selectors.br4};
    padding: ${selectors.ss1} ${selectors.ss4};
    margin-right: ${selectors.ss4};
`;

export const Text = styled(TextRegular1)`
    color: ${({ color, isGhost }) => (isGhost ? selectors.white : color)};
`;
