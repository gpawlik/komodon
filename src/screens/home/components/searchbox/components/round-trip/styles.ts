import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex-direction: row;
    margin-vertical: 10px;
    border-radius: 6;
    overflow: hidden;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : selectors.chalk)};
    padding: 6px 10px;
    align-items: center;
    flex: 1;
`;

export const ButtonText = styled(TextRegular2)`
    color: ${({ isSelected }) => (isSelected ? selectors.white : selectors.slate)};
`;
