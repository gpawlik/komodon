import styled from 'styled-components/native';

import { TextRegular2, TextMedium5 } from '~/components/text';

import { selectors } from '~/theme/main';

export const HeaderBox = styled.View`
    margin-vertical: 0px;
    align-items: center;
`;

export const ContentBox = styled.View`
    margin-bottom: ${selectors.ss8};
`;

export const ContentText = styled(TextRegular2)`
    margin-bottom: ${selectors.ss6};
    line-height: 25px;
`;

export const SubTitle = styled(TextMedium5)`
    margin-bottom: ${selectors.ss6};
`;
