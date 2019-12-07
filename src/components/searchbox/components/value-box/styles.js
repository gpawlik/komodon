// @flow
import styled from 'styled-components';

import { TextMedium1, TextRegular2, TextMedium7 } from '~/components/text';

export const Container = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
    height: ${({ isLarge }) => (isLarge ? 120 : 60)};
    padding: 5px 10px;
    margin-bottom: 10;
    flex: 1;
    width: 50%;
    align-items: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const Label = styled(TextMedium1)`
    margin-bottom: 6;
`;

export const Highlight = styled(TextMedium7)``;

export const Value = styled(TextRegular2)``;
