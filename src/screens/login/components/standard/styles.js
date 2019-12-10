// @flow
import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Content = styled.ScrollView`
    padding: 20px 20px;
`;

export const Section = styled.View`
    margin-bottom: 20;
`;

export const InputsContainer = styled.View`
    margin: 20px 0 10px;
`;

export const Link = styled.TouchableOpacity`
    align-items: center;
    height: 40;
    margin-vertical: ${({ isSeparate }) => (isSeparate ? 15 : 5)};
    flex-direction: row;
    justify-content: center;
`;

export const LinkText = styled(TextRegular2)`
    color: ${({ isMarked }) => (isMarked ? '#4285F4' : selectors.slate)};
    margin-horizontal: 3;
`;
