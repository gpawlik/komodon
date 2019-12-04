// @flow
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import { TextRegular4 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Item = styled.TouchableOpacity`
    padding: 16px 20px;
    border-bottom-color: ${selectors.grey};
    border-bottom-width: ${StyleSheet.hairlineWidth};
`;

export const ItemText = styled(TextRegular4)`
    color: ${selectors.midnight};
`;
