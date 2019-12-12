// @flow

import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const StyledInput = styled.TextInput`
    border-color: ${({ hasError }) => (hasError ? selectors.red : '#aaa')};
    border-width: 1;
    border-radius: 4;
    height: 50;
    font-size: 20;
    padding: 0 10px;
    color: #666;
`;

export const Container = styled.View`
    margin-bottom: ${({ isLast }) => (isLast ? 0 : 10)};
`;

export const InputContainer = styled.View`
    position: relative;
`;

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    right: 12;
    top: 14;
`;

export const Label = styled(TextRegular2)`
    color: ${({ hasError }) => (hasError ? selectors.red : selectors.slate)};
    margin-bottom: 6;
`;

export const ErrorLabel = styled(TextRegular2)`
    color: ${selectors.red};
`;
