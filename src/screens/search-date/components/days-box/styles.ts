import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.ScrollView.attrs({})`
    background-color: ${selectors.white};
    margin: 14px 20px;
    margin-bottom: 70px;
`;

export const Content = styled.View`
    margin-vertical: 20px;
`;
