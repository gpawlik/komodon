// @flow
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import { TextRegular2, TextRegular3, TextMedium3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const DestinationContainer = styled.View``;

export const InputBox = styled.View`
    padding: 6px 20px;
`;

export const Item = styled.TouchableOpacity`
    padding: 16px 20px;
    border-bottom-color: ${selectors.grey};
    border-bottom-width: ${StyleSheet.hairlineWidth};
    flex-direction: row;
`;

export const NameBox = styled.View`
    flex-grow: 1;
`;

export const NameText = styled(TextRegular3)``;

export const FullNameText = styled(TextRegular2)`
    color: #888;
`;

export const CodeText = styled(TextMedium3)`
    color: ${selectors.midnight};
`;
