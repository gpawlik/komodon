// @flow
import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    height: 40;
    border-radius: 4;
    background-color: ${selectors.white};
    opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)}
    position: absolute;
    top: 15;
    left: 15;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 40;
    padding-horizontal: 10px;
`;

export const Text = styled(TextRegular2)``;
