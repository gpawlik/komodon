// @flow
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import { TextRegular2, TextRegular3, TextMedium2, TextMedium3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: #fefefe;
`;

export const DestinationContainer = styled.View`
    background-color: #fff;
`;

export const InputBox = styled.View`
    padding: 14px 20px;
`;

export const Item = styled.TouchableOpacity`
    padding: 16px 20px;
    border-bottom-color: ${selectors.grey};
    border-bottom-width: ${StyleSheet.hairlineWidth};
    flex-direction: row;
`;

export const NameBox = styled.View`
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
`;

export const NameText = styled(TextRegular3)``;

export const FullNameText = styled(TextRegular2)`
    color: #888;
`;

export const CodeText = styled(TextMedium3)`
    color: ${selectors.midnight};
`;

export const LastSearchContainer = styled.View`
    background-color: #eee;
    padding-horizontal: 20px;
    padding-bottom: 20px;
`;

export const LastSearchBox = styled.View`
    background-color: #fff;

    border-radius: 8;
    overflow: hidden;
`;

export const Title = styled(TextMedium2)`
    margin-vertical: 10;
    align-self: center;
`;

export const Disclaimer = styled(TextRegular2)`
    color: #999;
    margin: 5px 20px;
    align-self: center;
`;

export const ConfirmBox = styled.View`
    padding: 16px 20px;
    background-color: #fff;
    border-top-width: 0.3;
    border-top-color: #aaa;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
