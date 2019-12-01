// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    padding: ${selectors.ss6};
    background-color: ${selectors.white};
    border-top-width: 1;
    border-top-color: ${selectors.chalk};
`;
