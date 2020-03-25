import styled from 'styled-components';

import { TextMedium3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.ScrollView`
    background-color: ${selectors.white};
`;

export const Section = styled.View`
    margin-bottom: 20;
`;

export const SectionTitle = styled(TextMedium3)`
    padding: 10px 16px;
`;
