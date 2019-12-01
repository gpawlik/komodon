// @flow
import styled from 'styled-components/native';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const HeaderBox = styled.View`
    margin-vertical: 30px;
    align-items: center;
`;

export const ContentBox = styled.View`
    margin-bottom: ${selectors.ss8};
`;

export const ContentText = styled(TextRegular3)`
    margin-bottom: ${selectors.ss6};
`;
