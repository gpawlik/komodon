import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    padding: 14px 20px;
    margin-vertical: 5;
    background-color: ${selectors.white};
    border-radius: 6;
    flex-direction: row;
    overflow: hidden;
`;

export const IconBox = styled.View``;

export const TextBox = styled.View`
    margin-left: 14;
`;

export const Text = styled(TextRegular2)``;
