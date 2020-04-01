import styled from 'styled-components';

import { SVGIcon } from '~/icons';
import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Content = styled.ScrollView``;

export const IconBox = styled.TouchableOpacity`
    position: absolute;
    top: 10;
    right: 10;
`;

export const Icon = styled(SVGIcon).attrs({
    colour: selectors.red,
    size: 20,
})``;
