import styled from 'styled-components';

import { generalIcons } from '~/constants/icons/general';
import { TextRegular2, TextMedium3 } from '~/components/text';
import { SVGIcon } from '~/icons';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    margin-horizontal: 16px;
    height: 115px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    showsHorizontalScrollIndicator: false,
})``;

export const Item = styled.TouchableOpacity`
    padding: 14px 8px;
    margin-bottom: 10;
    border-radius: 8;
    width: 120px;
    height: 105px;
    align-items: center;
    margin-right: ${selectors.ss4};
    border-width: 2;
    background-color: ${({ isSelected }) => (isSelected ? selectors.chalk : '#fff')};
    border-color: ${selectors.chalk};
`;

export const NameText = styled(TextMedium3)`
    text-align: center;
    color: ${selectors.lightGrey};
`;

export const TextBox = styled.View`
    height: 30px;
    flex: 1;
    justify-content: center;
`;

export const DescriptionText = styled(TextRegular2)`
    text-align: center;
`;

export const IconBox = styled.View`
    align-items: center;
    margin-bottom: ${selectors.ss4};
`;

export const StatusIcon = styled(SVGIcon).attrs(props => ({
    type: props.isSelected ? generalIcons.CIRCLE_TICK : generalIcons.CIRCLE_PLUS,
    colour: props.isSelected ? selectors.green : selectors.lightGrey,
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
