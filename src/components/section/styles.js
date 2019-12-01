// @flow
import styled from 'styled-components';

import { TextMedium3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    margin-vertical: ${selectors.ss6};
`;

export const Title = styled(TextMedium3)`
    margin-bottom: ${selectors.ss4};
    margin-horizontal: ${selectors.ss6};
`;
