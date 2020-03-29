import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';

export const Container = styled.View`
    padding: 14px 20px;
    align-items: center;
`;

export const IconBox = styled.View`
    align-items: center;
    margin-vertical: 15;
`;

export const Header = styled.View``;

export const Title = styled(TextRegular2)``;

export const ButtonBox = styled.View`
    margin-top: 15;
`;

export const CloseBox = styled.TouchableOpacity`
    position: absolute;
    top: 18;
    right: 18;
`;
