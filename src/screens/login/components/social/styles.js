// @flow
import styled from 'styled-components';

import { TextRegular2, TextRegular3, TextMedium4 } from '~/components/text';

export const Section = styled.View`
    margin-bottom: 20;
`;

export const ButtonsContainer = styled.View`
    margin-vertical: 20;
`;

export const ButtonBox = styled.TouchableOpacity`
    margin-bottom: ${({ isLast }) => (isLast ? 0 : 10)};
    background-color: ${({ color }) => color};
    border-radius: 6;
    padding: 6px 6px;
    flex-direction: row;
    align-items: center;
`;

export const IconBox = styled.View`
    background-color: #fff;
    width: 35;
    height: 35;
    border-radius: 4;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const ButtonText = styled(TextMedium4)`
    color: #fff;
    margin-left: 10;
`;

export const Disclaimer = styled(TextRegular2)`
    color: #666;
`;

export const Text = styled(TextRegular3)``;
