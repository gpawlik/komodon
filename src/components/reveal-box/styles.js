// @flow
import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const ContentBox = styled.View`
    height: ${({ isOpen }) => (isOpen ? 'auto' : 200)};
`;

export const Button = styled.TouchableOpacity`
    padding: ${selectors.ss6};
    align-self: stretch;
    align-items: center;
`;

export const ButtonText = styled(TextRegular2)`
    color: ${selectors.red};
`;
