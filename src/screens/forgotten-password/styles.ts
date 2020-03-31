import styled from 'styled-components/native';

import { TextRegular2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    height: 100%;
`;

export const Content = styled.View`
    margin: 20px;
`;

export const InputContainer = styled.View`
    margin-vertical: 20px;
`;

export const Title = styled(TextRegular2)`
    margin-bottom: ${selectors.ss3};
`;

export const Link = styled.TouchableOpacity`
    flex-direction: row;
`;

export const LinkText = styled(TextRegular2)`
    color: ${({ isMarked }) => (isMarked ? selectors.blue : selectors.slate)};
    margin-right: 6;
`;
