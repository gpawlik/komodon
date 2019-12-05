// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex-direction: row;
    margin: 10px 14px 0;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${selectors.chalk};
    padding: 6px 10px;
    margin-horizontal: 3;
    border-radius: 3px;
`;

export const ButtonText = styled(TextRegular3)``;
