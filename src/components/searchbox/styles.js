// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    padding: 10px 20px;
    flex-grow: 1;
`;

export const VerticalBox = styled.View`
    flex-direction: row;
`;

export const LabelButton = styled.TouchableOpacity``;

export const Label = styled(TextRegular3)`
    background-color: ${selectors.white};
    padding: 10px 20px;
`;

export const Flyout = styled.View`
    background-color: #fff;
    position: absolute;
    top: 0
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
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
