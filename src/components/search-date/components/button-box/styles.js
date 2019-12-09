// @flow
import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex-direction: row;
    margin: 10px 14px 0;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : selectors.chalk)};
    padding: 6px 10px;
    margin-horizontal: 3;
    border-radius: 3px;
    flex: 1;
    align-items: center;
`;

export const ButtonText = styled(TextRegular2)`
    color: ${({ isSelected }) => (isSelected ? selectors.white : selectors.slate)};
`;
