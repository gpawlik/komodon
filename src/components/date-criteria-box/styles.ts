import styled from 'styled-components';

import { generalIcons } from '~/constants/icons/general';
import { TextRegular2, TextMedium3 } from '~/components/text';
import { SVGIcon } from '~/icons';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    margin-horizontal: 16px;
    margin-vertical: 10px;
`;

export const Item = styled.View`
    background-color: #f6f6f6;
    padding: 14px 18px;
    margin-bottom: 10;
    border-radius: 8;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const NameText = styled(TextMedium3)``;

export const DescriptionText = styled(TextRegular2)``;

export const ContentBox = styled.View``;

export const RemoveBox = styled.TouchableOpacity`
    width: 20px;
    align-items: center;
    justify-content: center;
`;

export const RemoveIcon = styled(SVGIcon).attrs({
    type: generalIcons.CLOSE,
    colour: selectors.slate,
    size: 16,
})``;
