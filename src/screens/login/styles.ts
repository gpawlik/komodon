import styled from 'styled-components';

import { TextRegular3, TextMedium3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Content = styled.ScrollView`
    padding: 20px 20px;
`;

export const Section = styled.View`
    margin-bottom: 20;
`;

export const Text = styled(TextRegular3)``;

export const InputsContainer = styled.View`
    margin-vertical: 20;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled(TextRegular3)``;

export const Separator = styled.View`
    height: 2;
    background-color: #ddd;
    align-items: center;
    margin-bottom: 15;
    margin-top: 15;
`;

export const SeparatorText = styled(TextMedium3)`
    position: absolute;
    top: -10;
    background-color: ${selectors.white};
    padding: 0 20px;
    color: #ddd;
`;
