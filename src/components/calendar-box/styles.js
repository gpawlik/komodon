// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    padding: 10px 20px;
`;

export const SelectedDates = styled(TextRegular3)``;
