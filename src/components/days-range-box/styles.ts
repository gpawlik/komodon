import styled from 'styled-components';

import { TextRegular2, TextMedium3 } from '~/components/text';

export const Container = styled.View``;

export const Content = styled.View`
    padding: 16px 20px;
`;

export const QuickBox = styled.TouchableOpacity`
    background-color: #f6f6f6;
    padding: 14px 18px;
    margin-bottom: 10;
    border-radius: 8;
`;

export const NameText = styled(TextMedium3)``;

export const DescriptionText = styled(TextRegular2)``;
