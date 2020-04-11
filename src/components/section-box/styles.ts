import styled from 'styled-components';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { TextRegular1, TextMedium2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: ${selectors.ss5};
`;

export const ButtonBox = styled.TouchableOpacity`
    width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
    padding: 10px 20px;
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : '#fff')};
`;

export const Label = styled(TextMedium2)`
    margin-bottom: ${selectors.ss2};
    margin-horizontal: ${selectors.ss2};
    color: ${({ isSelected }) => (isSelected ? '#fff' : selectors.slate)};
`;

export const Text = styled(TextRegular1)`
    margin-bottom: ${selectors.ss2};
    margin-horizontal: ${selectors.ss2};
    color: ${({ isSelected }) => (isSelected ? '#fff' : selectors.slate)};
`;

export const IconBox = styled.View`
    position: absolute;
    bottom: -10;
    left: 50%;
`;

export const Icon = styled(SVGIcon).attrs(props => ({
    type: generalIcons.ARROW_DOWN,
    colour: props.isSelected ? selectors.slate : selectors.white,
    size: 20,
}))``;
