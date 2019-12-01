// @flow
import styled from 'styled-components';

import { TextMedium2, TextMedium4 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    align-items: center;
`;

export const Title = styled(TextMedium4)`
    margin-bottom: ${selectors.ss4};
`;

export const Description = styled(TextMedium2)``;
