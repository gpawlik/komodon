// @flow
import styled from 'styled-components';

import { SVGIcon } from '~/icons';

import { selectors } from '~/theme/main';

export const Touch = styled.TouchableOpacity`
    padding: ${selectors.ss2};
    border-width: 2;
    border-color: ${({ isOn }) => (isOn ? selectors.green : selectors.chalk)};
    border-radius: ${selectors.br4};
    width: 28;
    height: 28;
    align-items: center;
    justify-content: center;
    background-color: ${({ isOn }) => (isOn ? selectors.green : selectors.white)};
`;

export const Icon = styled(SVGIcon).attrs({
    colour: selectors.white,
    size: 20,
})``;
