// @flow
import styled from 'styled-components/native';

import { TextRegular4, TextMedium6 } from '~/components/text';

import { selectors } from '~/theme/main';

export const HeaderBox = styled.View`
    margin-vertical: 30px;
    align-items: center;
`;

export const ContentBox = styled.View`
    margin-bottom: ${selectors.ss8};
`;

export const ContentText = styled(TextRegular4)`
    margin-bottom: ${selectors.ss6};
`;

export const SubTitle = styled(TextMedium6)`
    margin-bottom: ${selectors.ss6};
`;
