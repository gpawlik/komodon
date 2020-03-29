import styled from 'styled-components';

import { TextRegular2, TextMedium1, TextMedium2, TextMedium5 } from '~/components/text';
//import { selectors } from '~/theme/main';

export const Content = styled.View``;

export const SegmentBox = styled.View`
    flex-direction: row;
    margin-vertical: 10;
`;
export const Segment = styled.View`
    padding-horizontal: 10;
    width: 50%;
    align-items: ${({ isLeft }) => (isLeft ? 'flex-end' : 'flex-start')};
`;

export const CodeText = styled(TextMedium5)``;

export const CityText = styled(TextMedium2)`
    color: #999;
`;

export const MetaBox = styled.View`
    padding-horizontal: 10;
    flex-direction: row;
`;

export const MetaTitle = styled(TextMedium1)`
    text-align: ${({ isLeft }) => (isLeft ? 'right' : 'left')};
`;

export const MetaText = styled(TextRegular2)`
    color: #999;
    text-align: ${({ isLeft }) => (isLeft ? 'right' : 'left')};
`;
