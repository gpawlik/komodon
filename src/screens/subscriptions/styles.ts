import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { selectors } from '~/theme/main';
import { SVGIcon } from '~/icons';

export const Container = styled.View``;

export const Content = styled.ScrollView`
    background-color: #f0f0f0;
    padding: 10px 20px;
`;

export const ItemBox = styled.TouchableOpacity`
    background-color: ${selectors.white};
    border-radius: 8px;
    margin-vertical: ${selectors.ss4};
    padding-bottom: ${selectors.ss4};
`;

export const ItemText = styled(TextRegular3)``;

export const IconBox = styled.TouchableOpacity`
    position: absolute;
    top: 10;
    right: 10;
`;

export const Icon = styled(SVGIcon).attrs({
    colour: selectors.red,
    size: 20,
})``;
