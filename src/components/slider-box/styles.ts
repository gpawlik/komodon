import styled from 'styled-components';

import { TextMedium3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    padding-bottom: 30;
`;

export const ValueBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ValueText = styled(TextMedium3)`
    padding: 4px 16px;
`;
