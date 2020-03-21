import styled from 'styled-components';

import { TextRegular2, TextMedium1, TextMedium2, TextMedium5 } from '~/components/text';
//import { selectors } from '~/theme/main';

export const Container = styled.View`
    padding: 14px 20px;
    align-items: center;
`;

export const IconBox = styled.View`
    align-items: center;
    margin-vertical: 15;
`;

export const Header = styled.View``;

export const Title = styled(TextRegular2)``;

export const ButtonBox = styled.View`
    margin-top: 15;
`;
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

export const CloseBox = styled.TouchableOpacity`
    position: absolute;
    top: 18;
    right: 18;
`;
