// @flow
import styled from 'styled-components';

import { TextMedium2, TextRegular2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex-direction: row;
`;

export const ButtonBox = styled.TouchableOpacity`
    width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
    padding: 10px 20px;
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : '#fff')};
`;

export const Label = styled(TextMedium2)`
    margin-bottom: ${selectors.ss2};
    margin-horizontal: ${selectors.ss2};
    color: ${({ isSelected }) => (isSelected ? '#fff' : selectors.slate)};
`;

export const Text = styled(TextRegular2)`
    margin-bottom: ${selectors.ss2};
    margin-horizontal: ${selectors.ss2};
    color: ${({ isSelected }) => (isSelected ? '#fff' : selectors.slate)};
`;
