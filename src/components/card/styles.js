// @flow
import styled from 'styled-components';

import { CachedImage } from '~/components/cached-image';
import { TextMedium2, TextMedium4 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${selectors.white};
    padding: ${selectors.ss6};
`;

export const EventImage = styled(CachedImage)`
    width: 100%;
    height: 170;
`;

export const ContentBox = styled.View`
    padding-vertical: ${selectors.ss5};
`;

export const TagLine = styled.View`
    flex-direction: row;
    margin-bottom: ${selectors.ss2};
`;

export const TagText = styled(TextMedium2)`
    color: ${({ color }) => (color ? color : selectors.grey)};
`;

export const Title = styled(TextMedium4)`
    margin-bottom: ${selectors.ss2};
`;
