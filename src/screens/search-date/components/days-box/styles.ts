import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 180,
    },
})`
    background-color: ${selectors.white};
    margin: 14px 20px;
    margin-bottom: 100px;
`;

export const Content = styled.View`
    margin-vertical: 20px;
`;
