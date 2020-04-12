import styled from 'styled-components';

import { TextRegular2, TextMedium2, TextMedium3, TextMedium6 } from '~/components/text';
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

export const SectionBox = styled.View`
    margin-horizontal: ${selectors.ss8};
    margin-bottom: ${selectors.ss6};
`;

export const DataItem = styled.View`
    margin-bottom: ${selectors.ss3};
`;

export const MainTitle = styled(TextMedium6)`
    margin-vertical: ${selectors.ss4};
    text-align: center;
`;

export const SectionTitle = styled(TextMedium3)`
    margin-vertical: ${selectors.ss4};
    text-align: center;
`;

export const Label = styled(TextMedium2)``;

export const Text = styled(TextRegular2)``;
