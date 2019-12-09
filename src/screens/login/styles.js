// @flow
import styled from 'styled-components';

import { TextRegular2, TextRegular3, TextMedium3, TextMedium4 } from '~/components/text';
//import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Content = styled.ScrollView`
    padding: 20px 20px;
`;

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
    padding: 14px 20px;
    flex-direction: row;
`;

export const ButtonText = styled(TextMedium4)`
    color: #fff;
    margin-left: 10;
`;

export const Text = styled(TextRegular3)``;

export const Disclaimer = styled(TextRegular2)`
    color: #666;
`;

export const InputsContainer = styled.View`
    margin-vertical: 20;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled(TextRegular3)``;

export const Separator = styled.View`
    height: 2;
    background-color: #ddd;
    align-items: center;
    margin-bottom: 30;
    margin-top: 15;
`;

export const SeparatorText = styled(TextMedium3)`
    position: absolute;
    top: -10;
    background-color: #fff;
    padding: 0 20px;
    color: #ddd;
`;
