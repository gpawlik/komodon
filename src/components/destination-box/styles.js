// @flow
import styled from 'styled-components';

import { TextMedium2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const ItemText = styled(TextMedium2)`
    color: ${selectors.midnight};
`;
