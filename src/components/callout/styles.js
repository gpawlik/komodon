// @flow
import styled from 'styled-components';
import { Callout } from 'react-native-maps';

import { TextRegular2, TextMedium3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled(Callout)`
    width: 270;
    padding-vertical: ${selectors.ss2};
`;

export const Touchable = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ContentBox = styled.View`
    margin-left: ${selectors.ss5};
`;

export const Title = styled(TextMedium3)`
    margin-bottom: ${selectors.ss3};
`;

export const Date = styled(TextRegular2)``;

export const MetaText = styled(TextRegular2)`
    color: ${selectors.midnight};
`;
