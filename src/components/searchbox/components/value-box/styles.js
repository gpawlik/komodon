// @flow
import styled from 'styled-components';

import { TextMedium1, TextRegular2, TextMedium7 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
    height: ${({ isLarge }) => (isLarge ? 105 : 60)};
    padding-top: ${({ isLarge }) => (isLarge ? 15 : 5)};
    padding-bottom: 5px;
    padding-horizontal: 10px;
    margin-bottom: 10;
    flex: 1;
    width: 50%;
    align-items: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const Label = styled(TextMedium1)`
    margin-bottom: 6;
`;

export const Highlight = styled(TextMedium7)`
    color: ${({ isLight }) => (isLight ? '#ddd' : selectors.slate)};
`;

export const Value = styled(TextRegular2)`
    color: ${({ isLight }) => (isLight ? '#aaa' : selectors.slate)};
`;
