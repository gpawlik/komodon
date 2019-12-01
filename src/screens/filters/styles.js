// @flow
import styled from 'styled-components/native';

import { selectors } from '~/theme/main';

export const ContentBox = styled.ScrollView`
    flex: 1;
`;

export const ButtonBox = styled.View`
    padding: ${selectors.ss6};
    border-top-width: 1;
    border-top-color: ${selectors.chalk};
`;
