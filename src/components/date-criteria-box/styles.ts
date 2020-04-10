import styled from 'styled-components';

import { generalIcons } from '~/constants/icons/general';
import { TextRegular2, TextMedium3 } from '~/components/text';
import { SVGIcon } from '~/icons';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    margin-horizontal: 16px;
    margin-vertical: 10px;
    flex-direction: row;
`;

export const Item = styled.TouchableOpacity`
    padding: 14px 18px;
    margin-bottom: 10;
    border-radius: 8;
    width: 120px;
    height: 120px;
    align-items: center;
    margin-right: ${selectors.ss4};
    border-width: 3;
    background-color: ${({ isSelected }) => (isSelected ? '#f6f6f6' : '#fff')};
    border-color: #f6f6f6;
`;

export const NameText = styled(TextMedium3)`
    text-align: center;
`;

export const DescriptionText = styled(TextRegular2)`
    text-align: center;
`;

export const ContentBox = styled.View``;

export const IconBox = styled.View`
    align-items: center;
    margin-bottom: ${selectors.ss4};
`;

export const StatusIcon = styled(SVGIcon).attrs(props => ({
    type: props.isSelected ? generalIcons.CIRCLE_TICK : generalIcons.CIRCLE_PLUS,
    colour: props.isSelected ? selectors.green : selectors.slate,
    size: 24,
}))``;

export const RemoveBox = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: ${selectors.white};
    border-color: ${selectors.slate};
    border-width: 1px;
`;

export const RemoveIcon = styled(SVGIcon).attrs({
    type: generalIcons.CLOSE,
    colour: selectors.slate,
    size: 10,
})``;
