// @flow
import styled from 'styled-components';

import { TextMedium5 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    width: 40;
    border-radius: 4;
    background-color: ${selectors.white};
    position: absolute;
    bottom: 15;
    left: 15;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 40;
    border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)};
    border-bottom-color: ${selectors.chalk};
`;

export const Text = styled(TextMedium5)``;
