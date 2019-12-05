// @flow
import styled from 'styled-components';

import { TextMedium1, TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    margin-bottom: 10;
`;

export const Label = styled(TextMedium1)``;

export const Value = styled(TextRegular3)``;

export const Flyout = styled.View`
    background-color: #fff;
    position: absolute;
    top: ${({ top }) => top};
    left: 20;
    right: 20;
    z-index: 9;
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
`;
