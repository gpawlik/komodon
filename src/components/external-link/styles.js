// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    padding-vertical: ${selectors.ss5};
    border-top-width: 1;
    border-top-color: ${selectors.chalk};
    border-bottom-width: 1;
    border-bottom-color: ${selectors.chalk};
    flex-direction: row;
    align-items: center;
    justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled(TextRegular3)`
    margin-horizontal: ${selectors.ss4};
`;
