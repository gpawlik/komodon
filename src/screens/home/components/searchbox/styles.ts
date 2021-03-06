import styled from 'styled-components';

import { TextRegular3, TextRegular4 } from '~/components/text';
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

export const SwitchButton = styled.TouchableOpacity`
    width: 25;
    height: 105;
    background-color: #eee;
    justify-content: center;
`;

export const Label = styled(TextRegular3)`
    background-color: ${selectors.white};
    padding: 10px 20px;
`;

export const Flyout = styled.View`
    background-color: ${selectors.white};
    position: absolute;
    top: 0
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
`;

export const CriteriaText = styled(TextRegular4)`
    padding: 10px 20px;
`;

export const ConfirmBox = styled.View`
    padding: 16px 20px;
    background-color: ${selectors.white};
    border-top-width: 0.3;
    border-top-color: #aaa;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
