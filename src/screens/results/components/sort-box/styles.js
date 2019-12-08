// @flow
import styled from 'styled-components';

import { TextRegular2, TextMedium2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    margin-vertical: 6px;
    border-radius: 6;
    margin-vertical: 10;
    flex-direction: row;
    overflow: hidden;
`;

export const ButtonBox = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : selectors.white)};
    padding: 8px 12px;
    height: 60;
    flex: 1;
`;

export const TitleText = styled(TextMedium2)`
    color: ${({ isSelected }) => (isSelected ? selectors.white : selectors.slate)};
`;

export const PriceText = styled(TextRegular2)`
    color: ${({ isSelected }) => (isSelected ? selectors.white : selectors.slate)};
`;
